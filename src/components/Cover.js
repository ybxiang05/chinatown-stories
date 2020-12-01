import React from "react";
import styled from "styled-components";

const StyledCover = styled.div`
  background-color: pink;
  height: 100vh;
  display: flex;
  justify-content: center;
  p {
    align-self: center;
    text-align: center;
  }
`;

const Cover = () => {
  return (
    <StyledCover>
      <p>placeholder for a cover</p>
    </StyledCover>
  );
};

export default Cover;
