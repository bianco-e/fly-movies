import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Stars from "./Stars";

export default function MovieModal({ closeModal, isOpen, movie }) {
  const {
    title,
    vote_average,
    poster_path,
    overview,
    release_date,
    id
  } = movie;
  const year = release_date && release_date?.substring(0, 4);
  return (
    <Modal closeTimeoutMS={250} isOpen={isOpen} onRequestClose={closeModal}>
      <Wrapper>
        <Image
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={`${title} picture`}
        />
        <Title>
          {title} ({year})
        </Title>
        <Description>
          {overview || "This movie does not have overview"}
        </Description>
        <Stars rate={vote_average} />
        <Description>{vote_average}</Description>
        <CloseButton onClick={closeModal}>Close</CloseButton>
      </Wrapper>
    </Modal>
  );
}

const Wrapper = styled.div({
  alignItems: "center",
  background: "#191919",
  borderRadius: "1.5em",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "15px 0",
  minWidth: "400px"
});
const Image = styled.img({
  height: "300px"
});
const Title = styled.h3({
  color: "#FFF"
});
const Description = styled.p({
  color: "#FFF",
  textAlign: "center",
  width: "90%"
});
const CloseButton = styled.button({
  background: "none",
  border: "none",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "bold",
  paddingTop: "10px"
});
