import { useContext } from 'react';
import { ManifestContext } from '../../context/ManifestContext.tsx';
import { getSponsorImagePath } from '../../utils/getStoragePath.ts';

export default function AllSponsors() {
  const {
    sponsors: { other },
  } = useContext(ManifestContext);

  return (
    <>
      <div className="text-(--charcoal) text-center text-5xl lg:text-6xl xl:text-6xl font-bold mt-4">
        Thank you, sponsors!
      </div>
      <div className="text-(--charcoal) text-center text-md lg:text-xl xl:text-2xl mt-4">
        The Holland Tulip Festival is made possible by the generous support of
        our community sponsors. Interested in sponsoring? Contact us!
      </div>
      <div
        id="allSponsors"
        className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[160px] mt-3 sm:mt-6 max-w-[1200px] m-auto"
      >
        {other.map((sponsor) => {
          return (
            <div
              className="flex flex-row justify-center items-center"
              key={sponsor.name}
            >
              <a
                target="_blank"
                className="w-[200px] max-w-[200px]"
                href={sponsor.siteLink}
              >
                <img
                  className="object-contain rounded-lg"
                  src={getSponsorImagePath(sponsor.logoFile)}
                  alt={`Sponsor logo for ${sponsor.name}`}
                />
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
