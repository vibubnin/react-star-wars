import {
  ADD_PERSON_TO_FAVORITE,
  REMOVE_PERSON_FROM_FAVORITE,
} from "../constants/actionTypes";

export const setPersonToFavorite = (payload) => ({
  type: ADD_PERSON_TO_FAVORITE,
  payload,
});

export const removePersonFromFavorite = (payload) => ({
  type: REMOVE_PERSON_FROM_FAVORITE,
  payload,
});
