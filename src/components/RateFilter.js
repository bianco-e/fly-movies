import React, { useState } from "react";
import styled from "styled-components";
import Star from "../svg/Star";
import { useDispatch } from "react-redux";
import { FILTER_BY_RATING } from "../store/actions";

export default function RateFilter() {
  const [selectedRate, setSelectedRate] = useState();
  const dispatch = useDispatch();
  const handleClick = (idx) => {
    if (idx !== selectedRate) {
      setSelectedRate(idx);
      dispatch({ type: FILTER_BY_RATING, payload: (idx + 1) * 2 });
    } else {
      setSelectedRate(undefined);
      dispatch({ type: FILTER_BY_RATING, payload: undefined });
    }
  };
  return (
    <Wrapper>
      <Container>
        <Title>Filter by rating</Title>
        <StarsWrapper>
          {new Array(5).fill("white").map((color, idx) => (
            <Button key={idx} onClick={() => handleClick(idx)}>
              <Star fill={selectedRate >= idx ? "yellow" : color} />
            </Button>
          ))}
        </StarsWrapper>
      </Container>
    </Wrapper>
  );
}

const Title = styled.h2({
  color: "#FFF"
});
const Wrapper = styled.div({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  width: "100%"
});
const Container = styled.div({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  height: "150px",
  justifyContent: "center"
});
const Button = styled.button({
  background: "none",
  border: "0",
  cursor: "pointer"
});
const StarsWrapper = styled.div({
  display: "flex",
  justifyContent: "space-between"
});
