import React from "react";
import styled from "styled-components";
import Cover from "./components/Cover";
import LandAcknowledgement from "./components/LandAcknowledgement";
import Accordion from "./components/Accordion";
import content from "./interviews/Content";

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
          key={interview.title}
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
