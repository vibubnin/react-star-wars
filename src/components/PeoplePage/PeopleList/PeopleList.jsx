import React from 'react';
import PropTypes from 'prop-types';

import classes from './PeopleList.module.css';
import { Link } from 'react-router-dom';

const PeopleList = ({ people }) => {
  return (
    <ul className={classes.list}>
      {people.map(({ name, id, img }) =>
        <li key={id} className={classes.list__item}>
          <Link to={`/people/${id}`}>
            <img src={img} alt={name} className={classes.list__personPhoto} />
            <p>{name}</p>
          </Link>
        </li>
      )}
    </ul>
  )
}

PeopleList.propTypes = {
  people: PropTypes.array.isRequired
}

export { PeopleList };
