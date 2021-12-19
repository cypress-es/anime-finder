import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import * as api from '../../repository/api';
import style from './MainLayout.module.scss';

interface MainLayoutProps {
  children: JSX.Element[] | JSX.Element,
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }): JSX.Element => {
  const [loginURL, setLoginURL] = useState<string | null>(null);
  useEffect(() => {
    api.getProjectConfig()
      .then(item => {
        console.log(item);
        setLoginURL(item.requestIdentity);
      });
  }, []);
  return (
    <div className={style.app}>
      <Navbar accessLink={loginURL} />
      {children}
    </div>
  );
};

export default MainLayout;
