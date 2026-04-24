import { Link, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useMemo } from 'react';
import classNames from 'classnames';
import Countdown from '../countdown/Countdown.tsx';
import NavRow from './NavRow.tsx';
import { useBoolean } from 'usehooks-ts';

const topLevelPathsToNames = {
  pageant: 'Pageant',
  parade: 'Parade',
  'beer-tent': 'Beer Tent',
  rides: 'Rides',
  food: 'Food',
  'craft-show': 'Craft Show',
  schedule: 'Schedule',
};

export default function Navbar() {
  const { value: isOpen, setFalse: close, toggle } = useBoolean(false);

  const { pathname } = useLocation();

  const downKey = useMemo(() => {
    if (pathname === '/') return 'Home';
    return (Object.entries(topLevelPathsToNames).find((entry) =>
      pathname.includes(entry[0])
    ) ?? [0, 'Page'])[1];
  }, [pathname]);

  useEffect(() => {
    document
      .getElementsByTagName('body')[0]!
      .classList[isOpen ? 'add' : 'remove']('overflow-hidden');
  }, [isOpen]);

  return (
    <>
      <div className="sticky top-0 z-50">
        <div
          className={classNames(
            'flex flex-col w-screen transition-all duration-500 pg-gradient-bg overflow-hidden',
            isOpen ? 'h-[calc(100vh-84px)]' : 'h-0'
          )}
        >
          <NavRow
            bgType="parade"
            label="Parade"
            onClick={close}
            route="parade"
          />
          <NavRow
            bgType="pageant"
            label="Queen's Pageant"
            onClick={close}
            route="pageant"
          />
          <NavRow bgType="5k" label="5K Run/Walk" onClick={close} route="run" />
          <NavRow
            bgType="beer"
            label="Beer Tent & Live Music"
            onClick={close}
            route="beer-tent"
          />
          <NavRow
            bgType="crafts"
            label="Craft Show"
            onClick={close}
            route="craft-show"
          />
          <NavRow
            bgType="generic1"
            label="Schedule & Map"
            onClick={close}
            route="schedule"
          />
        </div>
        <div
          id="navbar-outer"
          className="flex justify-center items-center min-h-[84px] w-full bg-(--charcoal)"
        >
          <div className="flex-1 pl-4">
            <Link to="/" className="max-h-17 max-w-34 block" onClick={close}>
              <img
                className="object-contain"
                src="https://storage.googleapis.com/tulip-festival-public-storage-dev/tulip_fest_logo_wide_gold.png"
                alt="Tulip Festival Logo"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <Countdown />
          </div>
          <div className="flex-1 text-right pr-4 text-gold hover:cursor-pointer">
            <div onClick={() => toggle()}>
              {!isOpen && (
                <>
                  <div className="inline-block min-[400px]:hidden">
                    Nav&nbsp;
                  </div>
                  <div className="hidden min-[400px]:inline-block">
                    Navigation&nbsp;
                  </div>
                </>
              )}
              {isOpen && <div className="inline-block">{downKey}&nbsp;</div>}
              <FontAwesomeIcon
                icon={faAnglesUp}
                className={classNames(
                  'transition-all duration-200',
                  isOpen ? '' : 'rotate-180'
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
