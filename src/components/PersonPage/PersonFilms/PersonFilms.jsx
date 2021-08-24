import React, { useEffect, useState } from 'react'
import { makeConcurrentRequest } from '@utils/network';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import classes from './PersonFilms.module.css';

const PersonFilms = ({ personFims, setErrorApi }) => {
  const [films, setFilms] = useState([]);
  useEffect(() => {

    (async () => {
      const res = await makeConcurrentRequest(personFims);

      if (res) {
        setFilms(res);
        setErrorApi(false);
      } else {
        setFilms([]);
        setErrorApi(true);
      }
    })();

  }, [personFims]);


  return (
    <div className={classes.wrapper}>
      <ul className={classes.list}>
        {[...films]
          .sort((a, b) => a.episode_id - b.episode_id)
          .map(({ title, episode_id }) =>
            <li
              className={classes.list__item}
              key={episode_id}
            >
              <span className={classes.list_episode}>
                Episode {episode_id}
              </span>
              <span className={classes.list__colon}> : </span>
              <span className={classes.list__title}>{title}</span>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default withErrorApi(PersonFilms);