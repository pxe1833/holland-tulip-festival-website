import TitleSponsorBanner from '../components/titleSponsorBanner/TitleSponsorBanner.tsx';
import PageContainer from '../components/pageContainer/PageContainer.tsx';
import Countdown from '../components/countdown/Countdown.tsx';
import AllSponsors from '../components/allSponsors/AllSponsors.tsx';
import InfoCardWrapper from '../components/infoCard/InfoCardWrapper.tsx';
import InfoCard from '../components/infoCard/InfoCard.tsx';

export default function Home() {
  return (
    <>
      <div className="bg-(--charcoal) flex justify-center md:hidden">
        <Countdown />
      </div>
      <TitleSponsorBanner />
      <PageContainer>
        <div className="text-md md:text-2xl text-gold text-center mt-4">
          TULIP FESTIVAL 2026 THEME:
        </div>
        <div className="text-5xl md:text-7xl xl:text-9xl text-gold font-bold text-center">
          AMERICA 250
        </div>
        <div className="flex justify-center mt-4 mx-4">
          <img
            className="object-contain max-w-[450px] min-w-[250px]"
            src="https://storage.googleapis.com/tulip-festival-public-storage-dev/2026/winner_image.png"
            alt="This year's theme picture contest winner"
          />
        </div>
        <div className="text-center text-gold">
          Theme art by this year's contest winner, Kendra Hyman
        </div>
        <InfoCardWrapper>
          <InfoCard
            title={"Queen's Pageant"}
            information={
              <>
                <p>
                  The queen's pageant will take place at the Holland High School
                  auditorium, beginning at 7:00 PM, Friday, May 1st.
                </p>
                <p className="mt-4">
                  Admission is $7, or $3 for children under 12.
                </p>
                <p className="mt-4">
                  The queen's coronation will also take place in the high school
                  auditorium, beginning at 6:00 PM, Saturday, May 2nd.
                </p>
                <p className="mt-4">
                  No admission fee is charged for the coronation.
                </p>
              </>
            }
            linkPath="pageant"
          />
          <InfoCard
            title={'Annual Parade'}
            information={
              <>
                <p>
                  A variety parade through central Holland. Featuring floats
                  sponsored and constructed by various local organizations,
                  including the Boy Scouts, Fire Department, Kiwanis, and more.
                </p>
                <p className="mt-4">
                  The queen candidates, as well as the previous year's Tulip
                  Queen, will each make an appearance during the annual parade.
                </p>
                <p className="mt-4">
                  The parade begins at 2:00 PM, Saturday, May 2nd.
                </p>
              </>
            }
            linkPath="parade"
          />
          <InfoCard
            title={'5K Run / Walk'}
            information={
              <>
                <p>
                  Starting and ending at the Holland Community Center, take part
                  in a 5K run / walk event to benefit the Boys & Girls Club of
                  Holland.
                </p>
                <p className="mt-4">
                  Participants must register prior to participating in the race.
                  Pre-registration may be done by mail or online. Day-of
                  in-person registration will be available at the community
                  center.
                </p>
                <p className="mt-4">
                  Adult (19+) registration cost is $30 through 4/30, $35 after.
                </p>
                <p className="mt-4">
                  Youth registration cost is $15 through 4/30, $20 after.
                </p>
              </>
            }
            linkPath="run"
          />
        </InfoCardWrapper>
        <InfoCardWrapper>
          <InfoCard
            title={'Beer Tent & Live Music'}
            information={
              <>
                <p>
                  Located in the town parking lot, to the left of the main
                  carnival area. Must be 21 years of age and have valid
                  government ID to enter. Cash only.
                </p>
                <p className="mt-4">
                  Multiple local groups will take the beer tent stage over the
                  course of the weekend, starting with The Boys of Summer on
                  Friday evening, JT & Jon Law on Saturday afternoon, and
                  perennial Tulip Fest favorite Hit N Run on Saturday night.
                </p>
                <p className="mt-4">
                  The beer tent will be open from 6 - 10 PM Friday, and 3 - 11
                  PM Saturday.
                </p>
              </>
            }
            linkPath="beer-tent"
          />
          <InfoCard
            title={'Craft Show'}
            information={
              <>
                <p>
                  See dozens of local vendors at the Tulip Festival Craft Show,
                  located in the Holland High School cafeteria and gymnasium.
                </p>
                <p className="mt-4">
                  Our vendors vary widely, offering everything from floral
                  arrangements and hand-crafted clothing to martial arts
                  instruction and event sound + lighting services.
                </p>
                <p className="mt-4">
                  Interested in becoming a vendor? Click this card to visit the
                  full Craft Show page, then follow the instructions there to
                  submit an application.
                </p>
              </>
            }
            linkPath="craft-show"
          />
        </InfoCardWrapper>
      </PageContainer>
      <AllSponsors />
    </>
  );
}
