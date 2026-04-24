import { useEffect, useState } from 'react';

type PageantCandidateRaw = {
  contentType: string;
  name: string;
  mediaLink: string;
};

export type PageantCandidateData = {
  firstName: string;
  lastName: string;
  candidateNumber: number;
  portraitUrl: string;
};

export default function usePageantCandidates(year: string) {
  const [candidates, setCandidates] = useState<PageantCandidateData[]>([]);

  useEffect(() => {
    const retrieveCandidates = async () => {
      const apiUrl = `https://storage.googleapis.com/storage/v1/b/tulip-festival-public-storage-dev/o?prefix=${year}/pageant_candidates`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data: { items: PageantCandidateRaw[] }) => {
          setCandidates(
            data.items
              .filter((item) => {
                const filename = item.name.split('/').pop();
                const filenameBits = filename?.split('_') ?? [];

                return (
                  item.contentType &&
                  item.contentType !== 'text/plain' &&
                  filenameBits.length >= 3
                );
              })
              .map((item) => {
                const filename = item.name.split('/').pop();
                const filenameBits = filename!.split('_');

                const candidateNumber = Number(
                  filenameBits[2].replaceAll(/\D/g, '')
                );

                return {
                  firstName: filenameBits[0],
                  lastName: filenameBits[1],
                  candidateNumber,
                  portraitUrl: item.mediaLink,
                };
              })
              .sort((a, b) => a.candidateNumber - b.candidateNumber)
          );
        })
        .catch();
    };

    retrieveCandidates();
  }, [year]);

  return candidates;
}
