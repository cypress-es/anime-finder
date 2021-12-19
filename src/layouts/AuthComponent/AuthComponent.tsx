import React from 'react';
import cookieStorage from '../../persistence';

interface AuthComponentProps {
  showWithAuth?: boolean
  children: JSX.Element[] | JSX.Element,
}

const AuthComponent: React.FC<AuthComponentProps> = ({ children, showWithAuth = true }): JSX.Element | null => {
  const hasToken = cookieStorage.getToken();
  if ((showWithAuth && hasToken) || (!showWithAuth && !hasToken)) return (
    <>
     {children}
    </>
  );
  return null;
};

export default AuthComponent;
