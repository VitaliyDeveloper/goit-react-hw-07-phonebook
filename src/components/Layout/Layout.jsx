import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main style={{ minHeight: '100vh', marginLeft: '160px' }}>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
