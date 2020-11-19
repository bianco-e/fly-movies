import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { SET_MOVIES } from "../store/actions";
import { getInitialMovies, searchForMovie } from "../apiQueries/apiQueries";

export default function SearchBar({}) {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const setMoviesToShow = (callback) => {
    callback(searchValue)
      .then(({ results }) => {
        dispatch({ type: SET_MOVIES, payload: results });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: SET_MOVIES, payload: [] });
      });
  };

  const handleConfirm = (e) => {
    if (e.key === "Enter") {
      if (searchValue) {
        setMoviesToShow(() => searchForMovie(searchValue));
      } else {
        setMoviesToShow(getInitialMovies);
      }
    }
  };

  return (
    <Input
      placeholder="Search for a movie"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      onKeyDown={(e) => handleConfirm(e)}
    />
  );
}

const Input = styled.input({
  border: "1px solid lightgray",
  borderRadius: "999px",
  height: "40px",
  padding: "5px 10px",
  textAlign: "center",
  width: "40%"
});
