import React from 'react'
import { useHistory } from 'react-router';

import BackIcon from './img/left-arrow.svg';
import classes from './PersonLinkBack.module.css';

export const PersonLinkBack = () => {
  const history = useHistory();

  const handleGoBack = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <a
      className={classes.link}
      href="#"
      onClick={handleGoBack}
    >
      <img
        className={classes.link__img}
        src={BackIcon}
        alt="back icon"
      />
      <span>Go back</span>
    </a>
  )
}
