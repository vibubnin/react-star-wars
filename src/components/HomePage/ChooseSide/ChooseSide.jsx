import React from 'react'
import cn from 'classnames';
import { THEME_DARK, THEME_LIGHT, THEME_NEITRAL, useTheme } from '../../../context/ThemeProvider';
import imgLightSide from './img/light-side.jpg';
import imgDarkSide from './img/dark-side.jpg';
import imgFalcon from './img/falcon.jpg';

import classes from './ChooseSide.module.css';

const ChooseSideItem = ({ theme, text, img, className }) => {
  const { setTheme } = useTheme();

  return (
    <div
      className={cn(classes.item, className)}
      onClick={() => setTheme(theme)}
    >
      <div className={classes.item__header}>{text}</div>
      <img
        className={classes.item__img}
        src={img}
        alt={text}
      />
    </div>
  )
}

export const ChooseSide = () => {
  const elements = [
    {
      text: "Light Side",
      img: imgLightSide,
      theme: THEME_LIGHT,
      className: classes.item__light
    },
    {
      text: "Dark Side",
      img: imgDarkSide,
      theme: THEME_DARK,
      className: classes.item__dark

    },
    {
      text: "I'm Han Solo",
      img: imgFalcon,
      theme: THEME_NEITRAL,
      className: classes.item__neitral
    }
  ]


  return (
    <div className={classes.container}>
      {elements.map((props) =>
        <ChooseSideItem
          key={props.theme}
          {...props}
        />
      )}
    </div>
  )
}
