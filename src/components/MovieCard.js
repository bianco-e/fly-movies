import React from "react";
import styled from "styled-components";
import Stars from "./Stars";

export default function MovieCard({ movie, openModal, setMovieForModal }) {
  const { title, vote_average, poster_path, id } = movie;
  return (
    <CardButton
      onClick={() => {
        openModal();
        setMovieForModal(movie);
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={`${title} picture`}
      />
      <Title>{title}</Title>
      <Stars rate={vote_average} />
    </CardButton>
  );
}

const CardButton = styled.button({
  alignItems: "center",
  background: "none",
  border: "0",
  color: "#000",
  cursor: "pointer",
  height: "330px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  margin: "30px 0",
  width: "18%"
});
const Title = styled.h4({
  margin: "10px 0",
  minHeight: "40px",
  textAlign: "center"
});
const Image = styled.img({
  height: "230px"
});
