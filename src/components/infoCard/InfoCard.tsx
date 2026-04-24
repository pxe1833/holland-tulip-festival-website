import { type ReactNode, useCallback } from 'react';
import cn from '../../utils/cn.ts';
import { Link } from 'react-router';

export default function InfoCard({
  title,
  information,
  linkPath,
}: {
  title: ReactNode;
  information: ReactNode;
  linkPath?: string;
}) {
  const wrap = useCallback(
    (children: ReactNode) => {
      const outerClass = cn(
        'flex flex-col flex-1 grow items-center rounded-2xl border p-4 border-(--gold) transition-all duration-200 hover-parent',
        linkPath ? 'hover:bg-(--white-tp)' : ''
      );
      return linkPath ? (
        <Link to={linkPath} className={outerClass}>
          {children}
        </Link>
      ) : (
        <div className={outerClass}>{children}</div>
      );
    },
    [linkPath]
  );

  return wrap(
    <>
      <div
        className={cn(
          'relative text-3xl text-gold font-bold text-center',
          linkPath ? 'hover-child-underline' : ''
        )}
      >
        {title}
      </div>
      <div className="flex flex-col justify-center grow text-gold text-center mt-4">
        {information}
      </div>
    </>
  );
}
