import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

export const Header = () => {
  return (
    <div className={classes.container}>
      <ul className={classes.container__list}>
        <li>
          <NavLink to="/" exact>Home</NavLink>
        </li>
        <li>
          <NavLink to="/people" exact>People</NavLink>
        </li>
        <li>
          <NavLink to="/not-found" exact>Not Found</NavLink>
        </li>
      </ul>
    </div>
  )
}
