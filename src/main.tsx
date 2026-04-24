import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home.tsx';
import Pageant from './pages/Pageant.tsx';
import Navbar from './components/nav/Navbar.tsx';
import Footer from './components/footer/Footer.tsx';
import Schedule from './pages/Schedule.tsx';
import ManifestContextProvider from './context/ManifestContextProvider.tsx';
import Parade from './pages/Parade.tsx';
import BeerTent from './pages/BeerTent.tsx';
import Run5k from './pages/Run5k.tsx';
import CraftShow from './pages/CraftShow.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ManifestContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="pageant">
            <Route index element={<Pageant />} />
          </Route>
          <Route path="parade" element={<Parade />} />
          <Route path="beer-tent" element={<BeerTent />} />
          <Route path="run" element={<Run5k />} />
          <Route path="craft-show" element={<CraftShow />} />
          <Route path="schedule" element={<Schedule />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ManifestContextProvider>
  </StrictMode>
);
