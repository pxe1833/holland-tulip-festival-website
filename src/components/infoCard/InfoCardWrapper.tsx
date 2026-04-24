import type { ReactNode } from 'react';

export default function InfoCardWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-row justify-center mt-3 mx-3 gap-3">
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-3 lg:gap-5 2xl:gap-9 max-w-[1500px]">
        {children}
      </div>
    </div>
  );
}
