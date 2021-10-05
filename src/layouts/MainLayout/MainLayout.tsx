import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import style from './MainLayout.module.scss';

interface MainLayoutProps {
  children: JSX.Element[] | JSX.Element,
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }): JSX.Element => {
  return (
    <div className={style.app}>
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
