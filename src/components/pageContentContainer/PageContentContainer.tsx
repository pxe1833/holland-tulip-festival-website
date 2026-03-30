import type { ReactNode } from 'react';

export default function PageContentContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex justify-center items-center w-full opacity-80 min-h-10 bg-purple-100 px-4 rounded-2xl">
      {children}
    </div>
  );
}
