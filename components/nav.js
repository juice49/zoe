'use strict';

import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NavIcon from './nav-icon';

const Nav = props => (
  <div>
    <nav className={`${css(styles.nav)}  u-margins-off`}>
      <a className={`${css(styles.navItem)}  u-color-inherit`} href='#'>Home</a>
      <a className={`${css(styles.navItem)}  u-color-inherit`} href='#'>About</a>
      <a className={`${css(styles.navItem)}  u-color-inherit`} href='#'>Portfolio</a>
      <a className={`${css(styles.navItem)}  u-color-inherit`} href='#'>Pricing</a>
      <a className={`${css(styles.navItem)}  u-color-inherit`} href='#'>Booth</a>
      <a className={`${css(styles.navItem)}  u-color-inherit`} href='mailto:hi@zoe.is'>hi@zoe.is</a>
    </nav>
    <NavIcon />
  </div>
);

export default Nav;

const myPink = '#D58C8D';
const vanCleef = '#523A3A';
const delta = { fontSize: '1.08rem' };

const styles = StyleSheet.create({
  nav: {
    backgroundColor: myPink,
    fontFamily: 'brandon-grotesque',
    fontWeight: 600,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#f2f2f2'
  },
  navItem: Object.assign({
    display: 'inline-block',
    padding: '1.26rem 1rem',
    transition: 'color 250ms',
    ':hover': {
      color: vanCleef
    }
  }, delta)
});