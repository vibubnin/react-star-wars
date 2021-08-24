import React from 'react'
import { useSelector } from "react-redux";

import bookmarkIcon from './img/bookmark.svg'
import classes from './Favorite.module.css'
import { Link } from 'react-router-dom'

export const Favorite = () => {
  const favoritesCounter = useSelector((state) => Object.keys(state.favorities).length);

  return (
    <div className={classes.container}>
      <Link to="/favorites">
        <span className={classes.counter}>{favoritesCounter}</span>
        <img
          className={classes.icon}
          src={bookmarkIcon}
          alt="bookmark"
        />
      </Link>
    </div>
  )
}
