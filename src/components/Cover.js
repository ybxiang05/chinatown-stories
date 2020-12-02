import React from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const StyledCover = styled.div`
  background-color: pink;
  height: 100vh;
  display: flex;
  flex-direction: column;
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
      <ArrowDropDownIcon />
    </StyledCover>
  );
};

export default Cover;
