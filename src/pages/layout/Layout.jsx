import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CookieConsent from '../../components/CookieConsent';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <CookieConsent />
      <Footer />
    </>
  );
}
