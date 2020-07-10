import React, { useReducer, useEffect } from "react";

import Header from "./Header";
import Movie from "./Movie";
import spinner from "../assets/ajax-loader.gif";
import Search from "./Search";
import { initialState, reducer } from "../store/reducer";
import '../../MovieSearch/index.css';
const MOVIE_API_URL = "https://www.omdbapi.com/?s=time&apikey=696ab7ca";

const MovieSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(MOVIE_API_URL)
    .then(res => res.json())
    .then(jsonResponse => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: jsonResponse.Search
      });
    });
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=696ab7ca`)
    .then(res => res.json())
    .then(
      jsonResponse => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error
          });
        }
      }
    );
  };

  const { movies, errorMessage, loading } = state;

  const retrievedMovies =
    loading && !errorMessage ? (
      <img className="spinner" src={spinner} alt="Loading spinner" />
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
      movies.map((movie, index) => (
        <Movie  key={`${index}-${movie.Title}`} movie={movie} />
      ))
    );

  return (
    <div className="App">
      <div className="m-container">
        <Header text="MOVIES LIST" onClick={refreshPage}/>

        <Search search={search} />

        <p className="App-intro">Movies related to time</p>

        <div className= "justify-content-sm-center row">{retrievedMovies}</div>
      </div>
    </div>
  );
};

export default MovieSearch;
