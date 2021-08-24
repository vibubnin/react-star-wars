import React from "react";
import { useSelector } from "react-redux";
import { PeopleList } from "@components/PeoplePage/PeopleList";
import classes from "./FavoritesPage.module.css";

export const FavoritesPage = () => {
  const people = useSelector((state) =>
    Object.entries(state.favorities).map(([id, person]) => ({ ...person, id }))
  );
  return (
    <div>
      <h1 className="headerText">Favorites</h1>
      {people.length ? (
        <PeopleList people={people} />
      ) : (
        <h2 className={classes.comment}>No data</h2>
      )}
    </div>
  );
};
