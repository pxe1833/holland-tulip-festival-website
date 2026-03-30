export default function CountdownNumber({
  remainingCount,
  timeIncrement,
  comma,
}: {
  remainingCount: number;
  timeIncrement: string;
  comma?: boolean;
}) {
  return (
    <div className="flex items-end justify-center px-1 sansita-swashed">
      <div className="font-extrabold text-2xl pr-2 text-center items-center">
        {remainingCount}
      </div>
      <div className="text-center">
        {timeIncrement}
        {remainingCount === 1 ? '' : 's'}
        {comma && ','}
      </div>
    </div>
  );
}
