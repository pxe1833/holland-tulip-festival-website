import PageContainer from '../components/pageContainer/PageContainer.tsx';
import InfoCardWrapper from '../components/infoCard/InfoCardWrapper.tsx';
import InfoCard from '../components/infoCard/InfoCard.tsx';

export default function Run5k() {
  return (
    <PageContainer>
      <div className="flex justify-center items-center text-center text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gold pt-6 md:pt-20 pb-2">
        Tulip Festival 5k Run/Walk
      </div>
      <div className="mt-3 text-center text-(--gold)">
        Ready to run for a good cause? Join us for the annual Tulip Festival 5k.
      </div>
      <div className="flex justify-center items-center grow">
        <div className="max-w-[1200px]">
          <InfoCardWrapper>
            <InfoCard
              title={'Registration'}
              information={
                <>
                  <p className="mt-4">
                    Participants must register prior to participating in the
                    race. Pre-registration may be done by mail or online. Day-of
                    in-person registration will be available at the community
                    center.
                  </p>
                  <p className="mt-4">
                    Adult (19+) registration cost is $30 through 4/30, $35
                    after.
                  </p>
                  <p className="mt-4">
                    Youth registration cost is $15 through 4/30, $20 after.
                  </p>
                </>
              }
            />
            <InfoCard
              title={'Packet Pickup'}
              information={
                <>
                  <p className="mt-4">
                    Once registered, you must collect your participant packet
                    and bring it with you on the day of the event to take part
                    in the race.
                  </p>
                  <p className="mt-4">
                    Early packet pickup will be available at the Boys & Girls
                    Club of Holland, located at 79 Vermont Street.
                  </p>
                  <p className="mt-4">
                    Youth registration cost is $15 through 4/30, $20 after.
                  </p>
                </>
              }
            />
          </InfoCardWrapper>
        </div>
      </div>
      <div className="flex justify-center items-center grow">
        <div className="max-w-[600px]">
          <InfoCardWrapper>
            <InfoCard
              title={'Post-Race Celebration & Awards'}
              information={
                <>
                  <p className="mt-4">
                    Participants must register prior to participating in the
                    race. Pre-registration may be done by mail or online. Day-of
                    in-person registration will be available at the community
                    center.
                  </p>
                  <p className="mt-4">
                    Adult (19+) registration cost is $30 through 4/30, $35
                    after.
                  </p>
                  <p className="mt-4">
                    Youth registration cost is $15 through 4/30, $20 after.
                  </p>
                </>
              }
            />
          </InfoCardWrapper>
        </div>
      </div>
      <div className="mt-12 text-center text-(--gold)">
        For full details and sponsorship information, please see{' '}
        <a
          href="https://tulipfest.itsyourrace.com/event.aspx?id=9031"
          target="_blank"
          className="text-(--vibrant-purple) hover:cursor-pointer hover:text-white transition-all duration-200"
        >
          our It's Your Race listing.
        </a>
      </div>
    </PageContainer>
  );
}
