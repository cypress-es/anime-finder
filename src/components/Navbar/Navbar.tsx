import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import style from './Navbar.module.scss';


const Navbar = (): JSX.Element => (
  <nav className={style.navbar} data-cy="navbar">
    <div className={style.container}>
      <Link to="/">
        <img className={style.img} src={logo} alt="anime finder" />
      </Link>
      <Link to="/">
        <h1 className={style.title}>Anime finder</h1>
      </Link>
    </div>
  </nav>
);

export default Navbar;
