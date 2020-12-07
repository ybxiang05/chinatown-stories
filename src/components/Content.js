import React from "react";
import styled from "styled-components";
import { Collapse, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Interview from "./Interview";
//import MultiMedia from './components/MultiMedia';
//import Goldstone from './components/Goldstone';
//import ArtistStatements from '/components/ArtistStatements';
import interviews from "../content/interviews";
//import multimedias from './content/multimedia';

const StyledListItemText = styled(ListItemText)`
  .MuiListItemText-root {
    justify-content: center;
    margin-left: 200px;
  }
  .MuiListItemText-multiline {
    display: flex;
    flex-direction: column;
  }
`;

const StyledListItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
  //   height: 80vh;
  //   overflow: scroll;

  p {
    margin: 0 20%;
  }
`;

const StyledInterview = styled.div`
  padding: 0 20%;
`;
const InterviewPara = styled.p`
  padding: 10px;
`;
const Span = styled.span`
  font-style: italic;
`;

const KamWai = styled.div`
  //
`;
const PearlLow = styled.div``;
const Content = props => {
  console.log(interviews[0]);
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const kamWai = interviews[0];
  const pearlLow = interviews[10];

  //const MassyBooks = useInterviewContent();
  //const BaoBei = useInterviewContent();

  // const contentText = content.split("*");
  return (
    <div>
      <KamWai>
        <Interview
          title={kamWai.title}
          subtitle={kamWai.subtitle}
          content={kamWai.content}
          backgrounds={kamWai.backgrounds}
          links={kamWai.links}
          italicized={kamWai.italicized}
        />
      </KamWai>
      <PearlLow>
        <Interview
          title={pearlLow.title}
          subtitle={pearlLow.subtitle}
          content={pearlLow.content}
          backgrounds={pearlLow.backgrounds}
          links={pearlLow.links}
          italicized={pearlLow.italicized}
        />
      </PearlLow>
    </div>
  );
  // return (
  //   <>
  //     <StyledInterview>
  //       <ListItem button onClick={handleClick}>
  //         <StyledListItemText primary={title} secondary={subtitle} />
  //         {open ? <ExpandLess /> : <ExpandMore />}
  //       </ListItem>
  //     </StyledInterview>
  //     <Collapse in={open} unmountOnExit>
  //       <List component="div">
  //         <StyledListItem button>
  //           <ListItemIcon />
  //           <p>{blurb}</p>
  //           <div>
  //             {contentText.map(paragraph => (
  //               <InterviewPara
  //                 key={paragraph}
  //                 // dangerouslySetInnerHTML={paragraph}
  //               >
  //                 {paragraph}
  //               </InterviewPara>
  //             ))}
  //           </div>
  //         </StyledListItem>
  //       </List>
  //     </Collapse>{" "}
  //   </>
  // );
};

// export default Accordion;
export default Content;
