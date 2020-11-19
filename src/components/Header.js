import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <Wrapper>
      <SearchBar />
    </Wrapper>
  );
}

const Wrapper = styled.nav({
  alignItems: "center",
  background: "url(/images/header-bg.jpg)",
  backgroundPositionY: "center",
  display: "flex",
  height: "220px",
  justifyContent: "center",
  width: "100%"
});
