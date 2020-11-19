import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import Header from "../components/Header";
import RateFilter from "../components/RateFilter";
import MovieModal from "../components/MovieModal";
import { useDispatch, useSelector } from "react-redux";
import { SET_MOVIES } from "../store/actions";
import { getInitialMovies } from "../apiQueries/apiQueries";

export default function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [movieForModal, setMovieForModal] = useState({});
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getInitialMovies()
      .then(({ results }) => {
        dispatch({ type: SET_MOVIES, payload: results });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: SET_MOVIES, payload: [] });
      });
  }, []);

  const movies = useSelector(({ movies }) => movies);

  return (
    <Wrapper>
      <Header />
      <RateFilter />
      <MoviesContainer>
        {movies.length ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              openModal={openModal}
              setMovieForModal={setMovieForModal}
            />
          ))
        ) : (
          <Title>No results</Title>
        )}
      </MoviesContainer>
      <MovieModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        movie={movieForModal}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div({
  alignItems: "center",
  background: "#191919",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh"
});
const MoviesContainer = styled.div({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  padding: "15px 0",
  width: "80%"
});
const Title = styled.h4({
  color: "#FFF"
});
