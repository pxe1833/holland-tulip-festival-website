import PageContainer from '../components/pageContainer/PageContainer';
import { Link } from 'react-router';

export default function Empty() {
  return (
    <PageContainer>
      <div className="flex flex-col grow justify-center">
        <div className="flex justify-center items-center sansita-swashed text-center text-4xl 2xl:text-6xl font-extrabold text-gold">
          Nothing to see here.
        </div>
        <div className="text-center text-white text-2xl mt-8 p-4">
          Check back soon for updates. Return to the home page
          <Link
            to="/"
            className="text-[#d9a761] transition-all duration-100 hover:text-(--vibrant-purple)"
          >
            &nbsp;here.
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
