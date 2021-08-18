import React from 'react'
import { useLocation } from 'react-router';
import img from '@static/not-found.png';
import classes from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  const location = useLocation();

  return (
    <>
      <img className={classes.img} src={img} alt="Not found" />
      <p className={classes.text} >No match for <u>{location.pathname}</u></p>
    </>
  )
}
