import React from 'react'
import { UiVideo } from '@ui/UiVideo/UiVideo';
import video from './video/han-solo.mp4';

import classes from './ErrorMessage.module.css';

export const ErrorMessage = () => {
  return (
    <div>
      <p className={classes.text}>
        The dark side of the force has won. <br />
        We cannot display data. <br />
        Come back when we fix everything.
      </p>

      <UiVideo className={classes.video} src={video} playbackRate={1} />
    </div>
  )
}
