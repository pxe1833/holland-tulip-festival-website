import type { ReactNode } from 'react';

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-full min-h-[calc(100vh-364px)] bg-(--charcoal) opacity-90 pb-12">
      <div className="flex flex-col grow">{children}</div>
    </div>
  );
}
