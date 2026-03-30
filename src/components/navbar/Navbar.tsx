import NavbarLink from './NavbarLink.tsx';
import { Link } from 'react-router';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const outerContainerRef = useRef(null);

  const [roundingClass, setRoundingClass] = useState('rounded-t-2xl');

  useEffect(() => {
    const refTarget = outerContainerRef.current;

    const observer = new IntersectionObserver(
      ([e]) => {
        // e.intersectionRatio < 1 when the element is stuck
        if (e.intersectionRatio < 1) {
          setRoundingClass('');
        } else {
          setRoundingClass('rounded-t-2xl');
        }
      },
      {
        threshold: [1.0],
      }
    );

    if (refTarget) observer.observe(refTarget);

    return () => {
      if (refTarget) observer.unobserve(refTarget);
    };
  }, [outerContainerRef]);

  return (
    <div
      id="navbar-outer"
      className="flex justify-center sticky -top-px h-17.5 opacity-80"
      ref={outerContainerRef}
    >
      <div
        className={`flex justify-center items-center w-full h-full bg-purple-100 px-4 rounded-b-2xl ${roundingClass}`}
      >
        <div className="flex justify-between pr-12 grow shrink">
          <NavbarLink text="Queen's Pageant" target={'/pageant'} />
          <NavbarLink text="Beer Tent" target={'/beer-tent'} />
          <NavbarLink text="Rides" target={'/rides'} />
        </div>
        <div className="flex justify-center items-center sansita-swashed text-4xl 2xl:text-5xl font-extrabold text-amber-300 mt-[-8px]">
          <Link to="/" className="hidden lg:block">
            Holland Tulip Festival
          </Link>
          <Link to="/" className="block lg:hidden">
            Tulip Fest
          </Link>
        </div>
        <div className="flex justify-between pl-12 grow shrink">
          <NavbarLink text="Food" target={'/food'} />
          <NavbarLink text="Craft Show" target={'/craft-show'} />
          <NavbarLink text="Senior Breakfast" target={'/senior-breakfast'} />
        </div>
      </div>
    </div>
  );
}
