import React from 'react'
import { Link } from 'react-router-dom'
import { UiButton } from '@ui/UiButton/UiButton';
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
    <div className={classes.container}>
      <Link
        className={classes.buttons}
        to={`/people/?page=${counterPage - 1}`}
      >
        <UiButton
          text="Previous"
          disabled={prevPage === null}
          onClick={handlePrev}
        />
      </Link>
      <Link
        className={classes.buttons}
        to={`/people/?page=${counterPage + 1}`}
      >
        <UiButton
          text="Next"
          disabled={nextPage === null}
          onClick={handleNext}
        />
      </Link>
    </div>
  )
}
