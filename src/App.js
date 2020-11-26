import React from "react";
import styled from "styled-components";
import Menu from "./components/Menu";
import Interview from "./components/Interview";
import content from "./interviews/content";
import Tray from "./images/tray_ma.png";

const StyledApp = styled.div``;

function App() {
  return (
    <StyledApp className="App">
      <Menu />
      {content.map(item => (
        <Interview key={item.title} content={item} />
      ))}
      <img src={Tray} />
    </StyledApp>
  );
}

export default App;
