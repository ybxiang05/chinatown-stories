import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  justify-content: center;
  align-content: center;
  height: 80vh;
  overflow: scroll;
  padding: 40px;
  margin: 40px;
  margin-top: 0;
  border: 2px solid pink;
`;

const Interview = props => {
  const { content } = props;
  const type = content.type;
  return type === "interview" ? (
    <StyledDiv>
      <p>{content.title}</p>
      <p>{content.subtitle}</p>
      <p>{content.blurb}</p>
      <p>{content.content}</p>
    </StyledDiv>
  ) : type === "poetry" ? (
    <div>
      <p>{content.title}</p>
      <p>{content.subtitle}</p>
    </div>
  ) : type === "about" ? (
    <div>
      {content.contributors.map(contributor => {
        return (
          <div key={contributor.name}>
            <p>{contributor.name}</p>
            <p>{contributor.bio}</p>
          </div>
        );
      })}
    </div>
  ) : (
    <div>
      <p>{content.title}</p>
      <p>{content.content}</p>
    </div>
  );
  //   return ({
  //     switch (type) {
  //       case "interview":
  //         return (
  //           <div>
  //             <p>{content.title}</p>
  //             <p>{content.subtitle}</p>
  //           </div>
  //         );
  //         break;
  //       case "poetry":
  //         return (
  //           <div>
  //             <p>{content.title}</p>
  //           </div>
  //         );
  //         break;
  //       case "image":
  //         return (
  //           <div>
  //             <img src="./images/tray_ma.png" />
  //             <p>{content.title}</p>
  //           </div>
  //         );
  //         break;
  //       // case "about":
  //       //   return (
  //       //     <div>
  //       //       {content.contributors.map(contributor => {
  //       //         return (
  //       //           <>
  //       //             <p>{contributor.name}</p>
  //       //             <p>{contributor.bio}</p>
  //       //           </>
  //       //         );
  //       //       })}
  //       //     </div>
  //       //   );
  //       //   break;
  //     }
  //   })
};

export default Interview;
