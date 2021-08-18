import React from 'react';
import PropTypes from 'prop-types';

import classes from './PeopleList.module.css';

const PeopleList = ({ people }) => {
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

PeopleList.propTypes = {
  people: PropTypes.array.isRequired
}

export { PeopleList }; 
