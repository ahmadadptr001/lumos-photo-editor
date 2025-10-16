import { Route, Routes } from 'react-router-dom';
import Beranda from '../pages/Home/Beranda';
import Layout from '../pages/layout/Layout';
import Fitur from '../pages/Feature/Fitur';
import Panduan from '../pages/Help/Panduan';
import Tentang from '../pages/About/Tentang';
import Kontak from '../pages/Contact/Kontak';
import NotFound from '../pages/Error/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Beranda />} />
        <Route path="/fitur" element={<Fitur />} />
        <Route path="/panduan" element={<Panduan />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/kontak" element={<Kontak />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
