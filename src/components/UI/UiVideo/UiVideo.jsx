import React, { useEffect, useRef } from 'react'
import cn from 'classnames';

import classes from './UiVideo.module.css';

export const UiVideo = ({
  className,
  src,
  playbackRate = 1.0
}) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.playbackRate = playbackRate;
  }, [playbackRate]);

  return (
    <video
      ref={ref}
      className={cn(classes.video, className)}
      loop
      autoPlay
      muted
    >
      <source src={src} />
    </video>
  )
}
