import Header from '../components/header/Header.tsx';
import LogoAndSponsor from '../components/logoAndSponsor/LogoAndSponsor.tsx';
import PageContentContainer from '../components/pageContentContainer/PageContentContainer.tsx';

export default function Home() {
  return (
    <>
      <Header />
      <LogoAndSponsor />
      <PageContentContainer>sneed</PageContentContainer>
    </>
  );
}
