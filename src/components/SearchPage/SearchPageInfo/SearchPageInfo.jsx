import React from 'react'
import { Link } from 'react-router-dom'
import classes from './SearchPageInfo.module.css'

export const SearchPageInfo = ({ people }) => {
  return (
    <>
      {people.length > 0
        ? (
          <ul className={classes.list}>
            {people.map(({ id, name, img }) =>
              <li className={classes.list__item} key={id}>
                <Link to={`/people/${id}`}>
                  <img className={classes.list__person_photo} src={img} alt={name} />
                  <p className={classes.list__person_name}>{name}</p>
                </Link>
              </li>
            )}
          </ul>
        )
        : <h2 className={classes.person_comment}>No Results</h2>
      }
    </>
  )
}
