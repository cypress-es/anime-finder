import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import github from '../../assets/icons/github.svg';
import style from './Navbar.module.scss';

interface NavbarProps {
  accessLink: string | null
}

const Navbar: React.FC<NavbarProps> = ({ accessLink }): JSX.Element => (
  <nav className={style.navbar} data-cy="navbar">
    <div className={style.container}>
      <Link className={style.brand} to="/">
        <img className={style.img} src={logo} alt="anime finder" />
        <h1 className={style.title}>Anime finder</h1>
      </Link>
      <div>
        {accessLink && (
          <Link className={style.button} to={accessLink}>
            <span>Login</span>
            <img className={style.github} src={github} alt="github login" />
          </Link>
        )}
      </div>
    </div>
  </nav>
);

export default Navbar;
