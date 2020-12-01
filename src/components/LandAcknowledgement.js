import React from "react";
import styled from "styled-components";

const StyledAck = styled.div`
  border: 5px solid pink;
  height: 100vh;
  display: flex;
  justify-content: center;
  p {
    align-self: center;
    margin: 20%;
    text-align: center;
  }
`;

const LandAcknowledgement = () => {
  return (
    <StyledAck>
      <p>
        This publication was conceptualized and created on the traditional and unceded territories
        of the Musqueam, Squamish, and Tsleil-Watauth nations. We recognize that as uninvited guests
        on these unceded lands, it is our duty to offer acknowledgement and support beyond lip
        service.
      </p>
    </StyledAck>
  );
};

export default LandAcknowledgement;
