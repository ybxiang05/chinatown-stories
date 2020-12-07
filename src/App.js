import React from "react";
import styled from "styled-components";
import Cover from "./components/Cover";
import LandAcknowledgement from "./components/LandAcknowledgement";
// import Accordion from "./components/Content";
// import Content from "./content/interviews";
import interviews from "./content/interviews";
import Content from "./components/Content";
const StyledApp = styled.div``;
const TableOfContent = styled.div``;
const Title = styled.p`
  text-align: center;
`;

function App() {
  // const interviewsOnly = Content.filter(interview => interview.type === "interview");
  const publicationRef = React.useRef();
  const handleClick = () => {
    publicationRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <StyledApp className="App">
      <Cover />
      <LandAcknowledgement handleClick={handleClick} />
      <TableOfContent ref={publicationRef}>
        <Title>Table of Content</Title>
        {/* {interviewsOnly.map(interview => ( */}
        <Content />
        {/* title={interview.title}
        subtitle={interview.subtitle}
        blurb={interview.blurb}
        content={interview.content}
        key={interview.title}
         /> */}
        {/* ))} */}
      </TableOfContent>
      {/* <Content /> */}
    </StyledApp>
  );
}

export default App;
