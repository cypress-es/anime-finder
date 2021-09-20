import React from 'react';
import logo from '../../assets/logo.png';
import style from './Navbar.module.scss';


const Navbar = (): JSX.Element => (
  <nav className={style.navbar} data-cy="navbar">
    <div className={style.container}>
      <img className={style.img} src={logo} alt="anime finder" />
      <h1 className={style.title}>Anime finder</h1>
    </div>
  </nav>
);

export default Navbar;
