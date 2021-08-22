import React from 'react'
import classes from './PersonPhoto.module.css';

export const PersonPhoto = ({ personPhoto, personName }) => {
  return (
    <div className={classes.container}>
      <img
        className={classes.photo}
        src={personPhoto}
        alt={personName}
      />
    </div>
  )
}
