import React from 'react'
import classes from './ErrorMessage.module.css';
 
export const ErrorMessage = () => {
  return (
    <div>
      <p className={classes.text}>
        The dark side of the force has won. <br/>
        We cannot display data. <br/>
        Come back when we fix everything.
      </p>
    </div>
  )
}
