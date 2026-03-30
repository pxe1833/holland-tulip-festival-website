import { useEffect, useMemo, useState } from 'react';
import CountdownNumber from './CountdownNumber.tsx';

const ms = {
  day: 86400000,
  hour: 3600000,
  minute: 60000,
  second: 1000,
};

export default function Countdown() {
  const [countdownMs, setCountdownMs] = useState(0);
  const festivalMs = useMemo(() => Date.parse('04-30-26'), []);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdownMs(Date.now());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const { daysRemaining, hoursRemaining, minutesRemaining, secondsRemaining } =
    useMemo(() => {
      const msDiff = festivalMs > countdownMs ? festivalMs - countdownMs : 0;
      let cumulativeMs = 0;

      const daysRemaining = Math.floor(msDiff / ms.day);
      cumulativeMs = daysRemaining * ms.day;

      const hoursRemaining = Math.floor((msDiff - cumulativeMs) / ms.hour);
      cumulativeMs += hoursRemaining * ms.hour;

      const minutesRemaining = Math.floor((msDiff - cumulativeMs) / ms.minute);
      cumulativeMs += minutesRemaining * ms.minute;

      const secondsRemaining = Math.floor((msDiff - cumulativeMs) / ms.second);

      return {
        daysRemaining,
        hoursRemaining,
        minutesRemaining,
        secondsRemaining,
      };
    }, [countdownMs, festivalMs]);

  return (
    <div className="flex justify-center h-10 -mt-2 mb-2 text-gold">
      <div className="flex justify-center items-top min-w-75">
        <CountdownNumber
          remainingCount={daysRemaining}
          timeIncrement={'Day'}
          comma
        />
        <CountdownNumber
          remainingCount={hoursRemaining}
          timeIncrement={'Hour'}
          comma
        />
        <CountdownNumber
          remainingCount={minutesRemaining}
          timeIncrement={'Minute'}
          comma
        />
        <CountdownNumber
          remainingCount={secondsRemaining}
          timeIncrement={'Second'}
        />
      </div>
    </div>
  );
}
