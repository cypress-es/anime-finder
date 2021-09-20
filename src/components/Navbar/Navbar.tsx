import React from 'react';
import logo from '../../assets/logo.png';
import style from './Navbar.module.scss';


const Navbar = (): JSX.Element => (
  <nav className={style.container} data-cy="navbar">
    <img className={style.img} src={logo} alt="anime finder" />
    <h1 className={style.title}>Anime finder</h1>
  </nav>
);

export default Navbar;
