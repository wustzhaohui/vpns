import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import TopBanner from './TopBanner';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isOnLoginPage = location.pathname === '/login';
  const isOnHomePage = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      {isOnHomePage && <TopBanner />}
      <Header />
      <main className="flex-grow">{children}</main>
      {!isOnLoginPage && <Footer />}
    </div>
  );
};

export default Layout;
