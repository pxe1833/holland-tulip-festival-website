import cn from '../../utils/cn.ts';
import { Link } from 'react-router';

export type NavRowBackground =
  | 'beer'
  | 'crafts'
  | 'parade'
  | 'pageant'
  | 'rides'
  | '5k'
  | 'generic1'
  | 'generic2'
  | 'generic3';

const NavRowBackgroundLinks: Record<NavRowBackground, string> = {
  beer: 'bg-[url(https://storage.googleapis.com/tulip-festival-public-storage-dev/thumbnails/beer_tent_thumbnail.jpg)]',
  crafts:
    'bg-[url(https://storage.googleapis.com/tulip-festival-public-storage-dev/thumbnails/craft_show_thumbnail.jpg)]',
  '5k': 'bg-[url(https://storage.googleapis.com/tulip-festival-public-storage-dev/thumbnails/5k_thumbnail.jpg)]',
  parade:
    'bg-[url(https://storage.googleapis.com/tulip-festival-public-storage-dev/thumbnails/parade_thumbnail.jpg)]',
  pageant:
    'bg-[url(https://storage.googleapis.com/tulip-festival-public-storage-dev/thumbnails/pageant_thumbnail.jpg)]',
  rides:
    'bg-[url(https://storage.googleapis.com/tulip-festival-public-storage-dev/thumbnails/rides_thumbnail.jpg)]',
  generic1:
    'bg-[url(https://images.unsplash.com/photo-1619787110676-c0181304528d?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]',
  generic2: '',
  generic3: '',
};

export default function NavRow({
  bgType,
  label,
  onClick,
  route,
}: {
  bgType: NavRowBackground;
  label: string;
  onClick?: () => void;
  route: string;
}) {
  return (
    <Link to={route} onClick={onClick} className="grow">
      <div
        className={cn(
          'grid w-full h-full bg-no-repeat bg-center bg-cover text-center hover:[&>.rowBg]:opacity-100 hover:[&>.rowMask]:opacity-35'
        )}
      >
        <div
          className={cn(
            'rowBg col-1 row-1 h-full z-10 opacity-0 transition-all duration-500 bg-no-repeat bg-center bg-cover',
            NavRowBackgroundLinks[bgType]
          )}
        />
        <div
          className={
            'rowMask col-1 row-1 h-full z-11 bg-black opacity-75 transition-all duration-500'
          }
        />
        <div
          className={
            'flex items-center justify-center h-full w-full col-1 row-1 z-12 text-2xl md:text-4xl font-extrabold text-gold uppercase hover-parent'
          }
        >
          <div className="relative hover-child-underline">{label}</div>
        </div>
      </div>
    </Link>
  );
}
