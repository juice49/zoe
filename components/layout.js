'use strict';

import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Nav from './nav';

const Layout = ({ children }) => (
  <div className='u-margins-lg'>
    <Nav />
    <h1 className='u-text-center'>Zoe Marie Photography</h1>
    {children}
  </div>
);

export default Layout;

const styles = StyleSheet.create({
  logo: {

  }
});