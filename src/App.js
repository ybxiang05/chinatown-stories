import React from "react";
import styled from "styled-components";
import Cover from "./components/Cover";
import LandAcknowledgement from "./components/LandAcknowledgement";
import Menu from "./components/Menu";
import Accordion from "./components/Accordion";
import Interview from "./components/Interview";
import content from "./interviews/Content";
import Tray from "./images/tray_ma.png";

const StyledApp = styled.div``;

function App() {
  const interviewsOnly = content.filter(interview => interview.type === "interview");
  return (
    <StyledApp className="App">
      <Cover />
      <LandAcknowledgement />
      {interviewsOnly.map(interview => (
        <Accordion
          title={interview.title}
          subtitle={interview.subtitle}
          blurb={interview.blurb}
          content={interview.content}
        />
      ))}
      {/* {content.map(item => (
        <Interview key={item.title} content={item} />
      ))} */}
      {/* <img src={Tray} /> */}
    </StyledApp>
  );
}

export default App;
