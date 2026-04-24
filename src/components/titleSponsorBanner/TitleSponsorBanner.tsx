import { useCallback, useContext } from 'react';
import { ManifestContext } from '../../context/ManifestContext.tsx';
import { getSponsorImagePath } from '../../utils/getStoragePath.ts';

export default function TitleSponsorBanner() {
  const {
    sponsors: { title },
  } = useContext(ManifestContext);

  const scrollToSponsors = useCallback(() => {
    const sponsorDiv = document.getElementById('allSponsors');
    sponsorDiv?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-3 mx-3 lg:my-6 gap-2 sm:gap-4">
      <div className="text-black">made possible by our title sponsor...</div>
      <a
        className="flex flex-col items-center justify-center max-h-[300px] max-w-[500px]"
        href={title.siteLink}
      >
        <img
          className="object-contain"
          src={getSponsorImagePath(title.logoFile)}
          alt={`Sponsor ${title.name} Company Logo`}
        />
      </a>
      <div className="text-black">
        ...and{' '}
        <span
          className="text-(--vibrant-purple) hover:cursor-pointer hover:text-white transition-all duration-200"
          onClick={scrollToSponsors}
        >
          many more!
        </span>
      </div>
    </div>
  );
}
