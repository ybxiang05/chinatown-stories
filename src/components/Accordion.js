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
    padding: 0 20%;
  }
`;

const StyledInterview = styled.div`
  padding: 0 20%;
`;

const Accordion = props => {
  const { title, subtitle, blurb, content } = props;
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const contentText = content.split("*");
  return (
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
            <p>{blurb}</p>
            <div>
              {contentText.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </StyledListItem>
        </List>
      </Collapse>{" "}
    </>
  );
};

export default Accordion;
