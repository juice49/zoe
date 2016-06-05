'use strict';

import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const margin = 2;

const Carousel = props => (
  <img className={css(styles.carousel)} src='/img/website8.jpg' />
);

export default Carousel;

const styles = StyleSheet.create({
  carousel: {
    display: 'block',
    //width: '100%'
    marginLeft: `${margin}rem`,
    width: `calc(100% - ${margin * 2}rem)`
  }
});