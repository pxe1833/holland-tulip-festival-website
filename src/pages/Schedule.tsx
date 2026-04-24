import PageContainer from '../components/pageContainer/PageContainer.tsx';
import InfoCardWrapper from '../components/infoCard/InfoCardWrapper.tsx';
import InfoCard from '../components/infoCard/InfoCard.tsx';

function MapLocation({
  number,
  location,
}: {
  number: number;
  location: string;
}) {
  return (
    <p className="text-xl mt-6">
      <span className="font-bold">{number}.</span> {location}
    </p>
  );
}

function ScheduleEvent({
  title,
  subtitle,
  admission,
}: {
  title: string;
  subtitle: string;
  admission?: string;
}) {
  return (
    <div>
      <p className="text-xl font-bold mt-6">{title}</p>
      <p className="text-md">{subtitle}</p>
      {admission && <p className="text-md">{admission}</p>}
    </div>
  );
}

export default function Schedule() {
  return (
    <PageContainer>
      <div className="flex justify-center items-center text-center text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gold pt-6 md:pt-20 pb-2">
        Event Map
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-4 ld:gap-16 justify-center items-stretch m-4">
        <img
          className="max-h-[506px] rounded-2xl"
          src="https://storage.googleapis.com/tulip-festival-public-storage-dev/poi_map.png"
          alt="Town Map with Points of Interest"
        />
        <div>
          <InfoCard
            title="Map Locations"
            information={
              <>
                <MapLocation number={1} location={'Holland High School'} />
                <MapLocation number={2} location={'Holland Community Center'} />
                <MapLocation number={3} location={'Town Parking Lot'} />
                <MapLocation number={4} location={'Parade Starting Location'} />
                <MapLocation number={5} location={"St. Joseph's RC Church"} />
                <MapLocation number={6} location={'Upstate Car Center'} />
                <MapLocation
                  number={7}
                  location={'Holland Historical Society'}
                />
              </>
            }
          />
        </div>
      </div>
      <div className="flex justify-center items-center text-center text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gold pt-6 md:pt-20">
        Event Schedule
      </div>
      <InfoCardWrapper>
        <InfoCard
          title="Thursday, April 30th"
          information={
            <div className="flex flex-col grow h-full justify-between">
              <ScheduleEvent
                title={"Senior Citizens' Breakfast"}
                subtitle={"St. Joseph's RC Church [5], 9:00 - 10:00 AM"}
              />
              <ScheduleEvent
                title={'Upstate Classic Car Show'}
                subtitle={'Upstate Auto Sales [6], 4:00 - 7:00 PM'}
              />
              <ScheduleEvent
                title={"Queen's Pageant Dress Rehearsal"}
                subtitle={'High School Auditorium [1], 7:00 PM'}
              />
              <ScheduleEvent
                title={'Main Carnival Open'}
                subtitle={'Town Parking Lot [3], 5:00 - 10:00 PM'}
              />
            </div>
          }
        />
        <InfoCard
          title="Friday, May 1st"
          information={
            <div className="flex flex-col grow h-full justify-between">
              <ScheduleEvent
                title={'School Art Show'}
                subtitle={'High School Auditorium Lobby [1], Time TBA'}
              />
              <ScheduleEvent
                title={'Spirit Parade'}
                subtitle={'Elementary School Drive, 1:45 PM'}
              />
              <ScheduleEvent
                title={"Queen's Pageant & Talent Show"}
                subtitle={'High School Auditorium [1], 7:00 PM'}
              />
              <ScheduleEvent
                title={'Main Carnival Open'}
                subtitle={'Town Parking Lot [3], 5:00 - 10:00 PM'}
              />
              <ScheduleEvent
                title={'Live Music - Boys of Summer'}
                subtitle={'Beer Tent [3], 7:00 - 10:00 PM'}
              />
            </div>
          }
        />
        <InfoCard
          title="Saturday, May 2nd"
          information={
            <>
              <ScheduleEvent
                title={'5K Run/Walk'}
                subtitle={'Community Center [2], 9:00 AM'}
              />
              <ScheduleEvent
                title={'Arts & Crafts Show'}
                subtitle={'High School [1], 9:00 AM - 4:00 PM'}
              />
              <ScheduleEvent
                title={'School Art Show'}
                subtitle={'High School Auditorium Lobby [1], Time TBA'}
              />
              <ScheduleEvent
                title={'Holland Historical Society Open'}
                subtitle={'7 South Main Street [7], 10:00 AM - 3:00 PM'}
              />
              <ScheduleEvent
                title={'Holland Garden Club Flower Show'}
                subtitle={'Community Center [2], 10:00 AM - 5:00 PM'}
              />
              <ScheduleEvent
                title={'Tulip Festival Annual Parade'}
                subtitle={'Parade Starting Location [4], 2:00 PM'}
              />
              <ScheduleEvent
                title={"Queen's Coronation"}
                subtitle={'High School Auditorium [1], 6:00 PM'}
              />
              <ScheduleEvent
                title={'Live Music - JT & Jon Law'}
                subtitle={'Beer Tent [3], 4:00 - 7:00 PM'}
              />
              <ScheduleEvent
                title={"Live Music - Hit 'n Run"}
                subtitle={'Beer Tent [3], 7:00 - 10:00 PM'}
              />
            </>
          }
        />
      </InfoCardWrapper>
    </PageContainer>
  );
}
