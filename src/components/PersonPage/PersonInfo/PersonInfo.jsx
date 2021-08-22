import React from 'react'

import classes from './PersonInfo.module.css';

export const PersonInfo = ({ personInfo }) => {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.list}>
        {personInfo.map(({ title, data }) =>
          data && (
            <li className={classes.list__item} key={title}>
              <span
                className={classes.list__title}>
                {title}
              </span>
              : {data}
            </li>
          )
        )}
      </ul>
    </div>
  )
}
