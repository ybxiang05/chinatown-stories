import React from "react";
import styled from "styled-components";

const Interview = ({ title, subtitle, content, backgrounds, links, italicized }) => {
  const modifyContent = () => {
    //use find (and map if there are multiple italicized words) to match italicized word list against text inside content, if found, then paste in <span></span>
  };
  const contentText = content.split("*");
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div onClick={handleClick}>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
      {open ? (
        <div>
          {contentText.map(paragraph => (
            <p>{paragraph}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Interview;
