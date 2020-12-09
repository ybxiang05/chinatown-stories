import React from "react";
import styled from "styled-components";
import { Collapse, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

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

const Interview = ({ title, subtitle, blurb, content, backgrounds, links, italicized }) => {
  const modifyContent = () => {
    //use find (and map if there are multiple italicized words) to match italicized word list against text inside content, if found, then paste in <span></span>
  };
  const contentText = content.split("*");
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    // <div>
    //   <div onClick={handleClick}>
    //     <h3>{title}</h3>
    //     <h4>{subtitle}</h4>
    //   </div>
    //   {open ? (
    //     <div>
    //       <p dangerouslySetInnerHTML={{ __html: blurb }}></p>
    //       <div>
    //         {contentText.map(paragraph => (
    //           <p dangerouslySetInnerHTML={{ __html: paragraph }} key={paragraph}></p>
    //         ))}
    //       </div>
    //     </div>
    //   ) : null}
    // </div>
    <>
      <StyledInterview>
        <ListItem button onClick={handleClick}>
          <StyledListItemText primary={title} secondary={subtitle} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </StyledInterview>
      <Collapse in={open} unmountOnExit>
        <List component="div">
          <StyledListItem button>
            <ListItemIcon />
            <p dangerouslySetInnerHTML={{ __html: blurb }} />
            <div>
              {contentText.map(paragraph => (
                <InterviewPara key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
          </StyledListItem>
        </List>
      </Collapse>{" "}
    </>
  );
};

export default Interview;
