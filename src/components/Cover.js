import React from "react";
import styled from "styled-components";
import Gate from "../assets/cover/gate.svg";
import Title from "../assets/cover/title.svg";
// import Lattice from "../assets/cover/lattice.svg";

const StyledCover = styled.div``;
const Border = styled.div`
  border: 5px solid #c02327;
  height: 90vh;
  width: 90vw;
`;
//NIC: why does it only work if I use vh and vw and not %?
const StyledGate = styled.img`
  position: absolute;
  min-height: 300px;
  min-width: 300px;
  @media (min-width: 800px) {
    height: 500px;
    width: 500px;
    right: 5%;
    bottom: -100px;
  }
  @media (min-width: 1120px) {
    height: 600px;
    width: 600px;
    right: 10%;
    bottom: 0;
  }
`;
//NIC: I've always been taught to be hesitant about position absolute. what are your thoughts?

// const LeftLattice = styled.img`
//   height: 200px;
//   position: absolute;
//   bottom: 5%;
//   left: 4%;
// `;
// const RightLattice = styled.img`
//   height: 100px;
// `;

//DESIGN: these lattices were key to the digital pub, but I'm not I'm having trouble imagining where they would go (and how I would write the css) without having the tree from my co-editor
//TODO/DESIGN: I think once the tree is ready and the cover is pulled together it would be cool if upon first landing on the page, all that's visible is the title centered, then animated to shift to the left to make room for the gate as decreases in opacity. I'm also stuck here because I don't know that I should work on this before the rest of the site is passable
const StyledTitle = styled.img`
  position: absolute;
  height: 300px;
  width: 300px;
  @media (min-width: 800px) {
    height: 500px;
    width: 500px;
    left: 100px;
    top: 0;
  }
  @media (min-width: 1120px) {
    height: 500px;
    width: 500px;
    top: 50px;
    left: 10%;
  }
`;
const Cover = () => {
  return (
    <StyledCover>
      <Border>
        {/* <LeftLattice src={Lattice} alt="Decorative element top right hand corner of cover" /> */}
        <StyledTitle src={Title} alt="Chinatown Today: Chinatown Stories Volume 3" />
        <StyledGate src={Gate} alt="linedrawing image of Millenium Gate in black and white" />
        {/* <RightLattice src={Lattice} alt="Decorative element bottom left hand corner of cover" /> */}
      </Border>
    </StyledCover>
  );
};

export default Cover;
