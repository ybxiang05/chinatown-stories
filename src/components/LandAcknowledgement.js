import React from "react";
import styled from "styled-components";

const StyledAck = styled.div`
  border: 5px solid pink;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    align-self: center;
    margin: 20%;
    text-align: center;
  }
`;

const LandAcknowledgement = props => {
  return (
    <StyledAck>
      <p>
        This publication was conceptualized and compiled on the traditional, ancestral, and unceded
        territories of the xwməθkwəy̓ əm (Musqueam), Skwxwú7mesh (Squamish), and Səl̓
        ílwətaʔɬ/Selilwitulh (Tsleil-Waututh) nations. We acknowledge that this land was never
        surrendered, relinquished, or handed over by these nations to Canada or British Columbia
        through a treaty or other means; it is sovereign and unsurrendered. It is time land is
        returned to them, or they be compensated for it. We also recognize that as uninvited guests
        on these unceded lands, allyship means working hard to dismantle colonial systems of
        oppression beyond paying lip service for the rest of our days.
      </p>

      <div onClick={props.handleClick}>
        <p>Access the publication</p>
      </div>
    </StyledAck>
  );
};

export default LandAcknowledgement;
