import PageContainer from '../components/pageContainer/PageContainer.tsx';
import usePageantCandidates from '../hooks/usePageantCandidates.ts';
import PageantCandidate from '../components/pageantContestant/PageantCandidate.tsx';
import { Fragment, useMemo } from 'react';
import cn from '../utils/cn.ts';
import InfoCardWrapper from '../components/infoCard/InfoCardWrapper.tsx';
import InfoCard from '../components/infoCard/InfoCard.tsx';
import { useMediaQuery } from 'usehooks-ts';

export default function Pageant() {
  const candidateData = usePageantCandidates('2026');
  const is2xl = useMediaQuery('(width > 1535px)');

  const { midpoint, oddOneOut } = useMemo(() => {
    return {
      midpoint: Math.floor(candidateData.length / 2),
      oddOneOut: candidateData.length % 2 !== 0,
    };
  }, [candidateData.length]);

  return (
    <PageContainer>
      <div className="flex justify-center items-center text-center text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gold pt-6 md:pt-20">
        Event Details
      </div>
      <InfoCardWrapper>
        <InfoCard
          title={"Queen's Pageant"}
          information={
            <>
              <p>
                The queen's pageant will take place at the Holland High School
                Auditorium, beginning at 7:00 PM, Friday, May 1st.
              </p>
              <p className="mt-2">
                Admission is $7, or $3 for children under 12.
              </p>
            </>
          }
        />
        <InfoCard
          title={'Annual Parade'}
          information={
            <>
              <p>
                The queen candidates, as well as the previous year's Tulip
                Queen, will each make an appearance during the annual parade.
                The parade begins at 2:00 PM, Saturday, May 2nd.
              </p>
            </>
          }
        />
        <InfoCard
          title={"Queen's Coronation"}
          information={
            <>
              <p>
                The coronation of this year's Tulip Queen will take place at
                6:00 PM, Saturday, May 2nd.
              </p>
              <p className="mt-2">
                The queen and her mother will enjoy a weekend getaway, courtesy
                of the Kiwanis Club of Holland.
              </p>
            </>
          }
        />
      </InfoCardWrapper>
      <div className="flex justify-center items-center text-center text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gold py-12 lg:py-20">
        Meet your 2026 Candidates!
      </div>
      <div className="flex flex-col 2xl:flex-row justify-center">
        <div className="flex flex-col gap-0 w-full justify-center items-center">
          {candidateData.slice(0, midpoint).map((candidate, index) => (
            <Fragment key={`wrapper-${index}`}>
              <PageantCandidate {...candidate} key={index} />
              <div
                className={cn(
                  'h-px w-[95%] max-w-100 m-5 2xl:m-8 bg-(--gold)',
                  index < midpoint - 1 ? '' : '2xl:hidden'
                )}
                key={`divider-${index}`}
              />
            </Fragment>
          ))}
        </div>
        <div className="flex flex-col gap-0 w-full justify-center items-center">
          {candidateData
            .slice(midpoint, candidateData.length - Number(oddOneOut))
            .map((candidate, index) => (
              <Fragment key={`wrapper-${index}`}>
                <PageantCandidate {...candidate} key={index} flip={is2xl} />
                <div
                  className={cn(
                    'h-px w-[95%] max-w-100 m-5 2xl:m-8 bg-(--gold)',
                    index < midpoint - 1 ? '' : '2xl:hidden'
                  )}
                  key={`divider-${index}`}
                />
              </Fragment>
            ))}
        </div>
      </div>
      {oddOneOut && (
        <div className="flex flex-col justify-center items-center">
          <div
            className={'h-px w-[60%] m-5 hidden 2xl:block 2xl:m-8 bg-(--gold)'}
          />
          <PageantCandidate {...candidateData[candidateData.length - 1]} />
        </div>
      )}
    </PageContainer>
  );
}
