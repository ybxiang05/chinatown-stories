import React from "react";
import styled from "styled-components";
import Cover from "./components/Cover";
import LandAcknowledgement from "./components/LandAcknowledgement";

import Content from "./components/Content";

const StyledApp = styled.div`
  height: 100vh;
  overflow-x: hidden;
`;
//TODO: the overflow-x: hidden is getting in the way of text visibility when a content item is open, as it prevents scroll

const StickySection = styled.section`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <StyledApp className="App">
      <StickySection>
        <Cover />
      </StickySection>
      <StickySection>
        <LandAcknowledgement />
      </StickySection>
      <StickySection>
        <Content />
      </StickySection>
    </StyledApp>
  );
}

export default App;
