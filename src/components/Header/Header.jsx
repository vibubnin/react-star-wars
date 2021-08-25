import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Favorite } from '@components/Favorite/Favorite';

import droidIcon from './img/droid.svg';
import lightsaberIcon from './img/lightsaber.svg';
import spaceStationIcon from './img/space-station.svg';

import classes from './Header.module.css';
import { THEME_DARK, THEME_LIGHT, THEME_NEITRAL, useTheme } from '../../context/ThemeProvider';

export const Header = () => {
  const { theme } = useTheme();
  const [icon, setIcon] = useState(spaceStationIcon);

  useEffect(() => {
    switch (theme) {
      case THEME_LIGHT: setIcon(lightsaberIcon); break;
      case THEME_DARK: setIcon(spaceStationIcon); break;
      case THEME_NEITRAL: setIcon(droidIcon); break;
      default: setIcon(spaceStationIcon);
    }
  }, [theme])

  return (
    <div className={classes.container}>
      <img
        className={classes.logo}
        src={icon}
        alt="logo"
      />
      <ul className={classes.container__list}>
        <li>
          <NavLink to="/" exact>Home</NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/not-found" exact>Not Found</NavLink>
        </li>
        <li>
          <NavLink to="/fail">Fail</NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  )
}
