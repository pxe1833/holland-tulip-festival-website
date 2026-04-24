import type { PageantCandidateData } from '../../hooks/usePageantCandidates.ts';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter.ts';
import cn from '../../utils/cn.ts';

export default function PageantCandidate({
  firstName,
  lastName,
  candidateNumber,
  portraitUrl,
  flip = false,
}: PageantCandidateData & { flip?: boolean }) {
  return (
    <div className="flex w-full justify-center items-center transition-all duration-200">
      <div
        className={cn(
          'flex w-full mx-3 justify-between sm:justify-around lg:justify-center lg:gap-40 items-center transition-all duration-200 hover:cursor-pointer hover-parent',
          (flip ? candidateNumber % 2 === 0 : candidateNumber % 2 !== 0)
            ? 'flex-row-reverse'
            : 'flex-row'
        )}
      >
        <div className="flex flex-col justify-center items-center min-w-40">
          <div className="text-white font-bold transition-all duration-200 hover-child-purple-text">
            Candidate
          </div>
          <div className="text-white text-5xl font-bold transition-all duration-200 hover-child-purple-text">
            #{candidateNumber}
          </div>
          <div className="relative text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center italic text-gold pt-2 hover-child-underline">
            {capitalizeFirstLetter(firstName)} {capitalizeFirstLetter(lastName)}
          </div>
        </div>
        <div className="flex h-30 w-30 sm:h-40 sm:w-40 items-center justify-center mx-4">
          <img
            className="object-contain rounded-2xl max-h-30 sm:max-h-40"
            src={portraitUrl}
            alt={`${firstName} ${lastName}} portrait`}
          />
        </div>
      </div>
    </div>
  );
}
