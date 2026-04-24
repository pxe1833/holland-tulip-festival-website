import cn from '../../utils/cn.ts';

export default function CountdownNumber({
  remainingCount,
  timeIncrement,
}: {
  remainingCount: number;
  timeIncrement: string;
}) {
  return (
    <div className="grow flex flex-col items-center justify-center md:min-w-25">
      <div
        className={cn(
          'font-extrabold text-2xl text-center items-center transition-all duration-200',
          remainingCount === 0 ? 'text-(--vibrant-purple)' : 'text-gold'
        )}
      >
        {remainingCount}
      </div>
      <div className="text-center text-gold">
        {timeIncrement}
        {remainingCount === 1 ? '' : 's'}
      </div>
    </div>
  );
}
