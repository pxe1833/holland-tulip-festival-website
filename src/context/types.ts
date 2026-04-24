export type RawCandidate = {
  candidateNumber: number;
  firstName: string;
  lastName: string;
  bio: string | null;
};

export type RawSponsor = {
  name: string;
  logoFile: string;
  siteLink: string;
};

export type RawManifest = {
  pageant: {
    winner: number;
    candidates: RawCandidate[];
  };
  sponsors: {
    title: RawSponsor;
    other: RawSponsor[];
  };
};
