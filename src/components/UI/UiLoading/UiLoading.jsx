import React, { useEffect, useState } from 'react'
import cn from 'classnames';
import loaderBlack from './img/loader-black.svg';
import loaderWhite from './img/loader-white.svg';
import loaderBlue from './img/loader-blue.svg';
import classes from './UiLoading.module.css'

export const UiLoading = ({
  theme = 'white',
  isShadow = true,
  className
}) => {
  const [loaderIcon, setLoaderIcon] = useState(null);

  useEffect(() => {
    switch (theme) {
      case 'black': setLoaderIcon(loaderBlack); break;
      case 'blue': setLoaderIcon(loaderBlue); break;
      default: setLoaderIcon(loaderWhite);

    }
  }, [theme]);

  return (
    <img
      className={cn(classes.loader, isShadow && classes.shadow, className)}
      src={loaderIcon}
      alt="loading"
    />
  )
}
