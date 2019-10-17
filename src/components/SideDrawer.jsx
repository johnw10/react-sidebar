import React from "react";
import {
  Stylednav,
  Styledul,
  Styledli,
  Styledlink
} from "../styled/SideDrawer";

const SideDrawer = props => {
  console.log(props);
  return (
    <Stylednav open={props.open}>
      <Styledul>
        <Styledli>
          <Styledlink to="/">Home</Styledlink>
        </Styledli>
        <Styledli>
          <Styledlink to="/contact">Contact</Styledlink>
        </Styledli>
        <Styledli>
          <Styledlink to="/about">About</Styledlink>
        </Styledli>
      </Styledul>
    </Stylednav>
  );
};

export default SideDrawer;
