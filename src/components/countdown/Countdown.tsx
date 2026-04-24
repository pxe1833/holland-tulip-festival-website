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
    <div className="flex w-full max-w-[450px] justify-center z-50">
      <div className="flex w-full justify-center items-top">
        <CountdownNumber remainingCount={daysRemaining} timeIncrement={'Day'} />
        <CountdownNumber
          remainingCount={hoursRemaining}
          timeIncrement={'Hour'}
        />
        <CountdownNumber
          remainingCount={minutesRemaining}
          timeIncrement={'Minute'}
        />
        <CountdownNumber
          remainingCount={secondsRemaining}
          timeIncrement={'Second'}
        />
      </div>
    </div>
  );
}
