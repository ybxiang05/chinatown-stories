import React from "react";
import styled from "styled-components";
import Cover from "./components/Cover";
import LandAcknowledgement from "./components/LandAcknowledgement";
import Accordion from "./components/Accordion";
import Content from "./interviews/Content";

const StyledApp = styled.div``;

function App() {
  const interviewsOnly = Content.filter(interview => interview.type === "interview");
  const publicationRef = React.useRef();
  const handleClick = () => {
    publicationRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <StyledApp className="App">
      <Cover />
      <LandAcknowledgement handleClick={handleClick} />
      <div ref={publicationRef}>
        {interviewsOnly.map(interview => (
          <Accordion
            title={interview.title}
            subtitle={interview.subtitle}
            blurb={interview.blurb}
            content={interview.content}
            key={interview.title}
          />
        ))}
      </div>
    </StyledApp>
  );
}

export default App;
