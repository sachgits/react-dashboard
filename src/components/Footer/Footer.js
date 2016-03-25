import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';
import { Link } from 'react-router';

class Footer extends Component {

  render() {
    return (
      <div className={s.root}>
        <span className={s.text}>© Your Company</span>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/">Home</Link>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/privacy">Privacy</Link>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/not-found">Not Found</Link>
      </div>
    );
  }

}

export default withStyles(Footer, s);
