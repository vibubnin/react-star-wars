import React from 'react'

import classes from './PeopleList.module.css';

export const PeopleList = ({ people }) => {
  return (
    <ul className={classes.list}>
      {people.map(({ name, id, img }) => 
        <li key={id} className={classes.list__item}>
          <a href="#">
            <img src={img} alt={name} className={classes.list__personPhoto}/>
            <p>{name}</p>
          </a>
        </li>
      )}
    </ul>
  )
}
