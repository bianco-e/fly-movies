import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Star from "../svg/Star";

export default function Stars({ rate }) {
  const [starsArray, setStarsArray] = useState(new Array(5).fill("white"));

  useEffect(() => {
    setStarsArray(
      starsArray.map((color, idx) => {
        const starsNumber = rate / 2;
        return idx < starsNumber ? "yellow" : color;
      })
    );
  }, []);
  return (
    <Wrapper>
      {starsArray.map((color, idx) => {
        return <Star key={idx} fill={color} />;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  width: "120px"
});
