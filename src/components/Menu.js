import React from "react";
import styled from "styled-components";
import Cover from "../images/cover.png";
const StyledMenu = styled.div`
  border: 2px solid white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  width: 100%;
  background-color: pink;
`;
const StyledMenuTab = styled.div`
  border: 2px solid white;
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  background-color: pink;
`;
const StyledButton = styled.p`
  border: 2px solid white;
  padding: 2px;
  color: white;
  height: fit-content;
  align-self: flex-end;
`;
const Background = styled.img`
  height: 100%;
`;
const Menu = () => {
  const [isMenuOpen, changeIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    changeIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };
  return (
    <div>
      {isMenuOpen ? (
        <StyledMenu>
          <Background src={Cover} />
          <StyledButton onClick={toggleMenu}>Close Menu</StyledButton>
        </StyledMenu>
      ) : (
        <StyledMenuTab>
          <StyledButton onClick={toggleMenu}>Open Menu</StyledButton>
        </StyledMenuTab>
      )}
    </div>
  );
};
export default Menu;
