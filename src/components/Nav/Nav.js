import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => (
  <nav className={styles.nav}>
    <NavLink
      to="/"
      exact
      className={styles.link}
      activeClassName={styles.active}
    >
      Home
    </NavLink>{' '}
    <NavLink to="/pets" className={styles.link} activeClassName={styles.active}>
      Pets
    </NavLink>
    <NavLink
      to="/about"
      exact
      className={styles.link}
      activeClassName={styles.active}
    >
      About
    </NavLink>
  </nav>
);

export default Nav;
