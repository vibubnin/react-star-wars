import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { removePersonFromFavorite, setPersonToFavorite } from '@store/actions';
import iconFavorite from './img/favorite.svg';
import iconFavoriteFill from './img/favorite-fill.svg';

import classes from './PersonPhoto.module.css';

export const PersonPhoto = ({ personId, personPhoto, personName }) => {
  const isPersonFavorite = useSelector((state) => Boolean(state.favorities[personId]));
  const dispatch = useDispatch();

  const dispatchFavoritePerson = () => {
    if (isPersonFavorite) {
      dispatch(removePersonFromFavorite(personId));
    } else {
      dispatch(setPersonToFavorite({
        [personId]: { name: personName, img: personPhoto }
      }))
    }
  }

  return (
    <div className={classes.container}>
      <img
        className={classes.photo}
        src={personPhoto}
        alt={personName}
      />
      <img
        className={classes.favorite}
        src={isPersonFavorite ? iconFavoriteFill : iconFavorite}
        alt={isPersonFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
        onClick={dispatchFavoritePerson}
      />
    </div>
  )
}
