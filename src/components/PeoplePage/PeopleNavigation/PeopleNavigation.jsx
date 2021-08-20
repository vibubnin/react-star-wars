import React from 'react'
import { Link } from 'react-router-dom'
import classes from './PeopleNavigation.module.css';

export const PeopleNavigation = ({
  getResource,
  prevPage,
  nextPage,
  counterPage
}) => {
  const handlePrev = () => getResource(prevPage);
  const handleNext = () => getResource(nextPage);

  return (
    <div>
      <Link
        className={classes.link}
        to={`/people/?page=${counterPage - 1}`}
      >
        <button
          onClick={handlePrev}
          disabled={prevPage === null}
          className={classes.buttons}>
          Previous
        </button>
      </Link>
      <Link
        className={classes.link}
        to={`/people/?page=${counterPage + 1}`}
      >
        <button
          onClick={handleNext}
          disabled={nextPage === null}
          className={classes.buttons}>
          Next
        </button>
      </Link>
    </div>
  )
}
