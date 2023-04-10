import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => {
        const deleteHandler = () => {
          props.onDelete(movie.id);
        };
        return (
          <Movie
            key={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
            onDelete={deleteHandler}
          />
        );
      })}
    </ul>
  );
};

export default MovieList;
