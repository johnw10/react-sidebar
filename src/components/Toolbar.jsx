import React from "react";
import DrawerToggleButton from "./DrawerButton";
import {
  Styledheader,
  Styledul,
  Styledli,
  Styleda,
  Stylednav,
  Spacer,
  Styleddiv,
  StyledLink
} from "../styled/Toolbar";

const Toolbar = ({ drawerClickHandler }) => {
  return (
    <Styledheader>
      <Stylednav>
        <div>
          <DrawerToggleButton click={drawerClickHandler} />
        </div>
        <Styleddiv>
          <Styleda href="/">The Logo</Styleda>
        </Styleddiv>
        <Spacer />
        <div>
          <Styledul>
            <Styledli>
              <StyledLink to="/">Home</StyledLink>
            </Styledli>
            <Styledli>
              <StyledLink to="/about">About</StyledLink>
            </Styledli>
            <Styledli>
              <StyledLink to="/contact">Contact</StyledLink>
            </Styledli>
          </Styledul>
        </div>
      </Stylednav>
    </Styledheader>
  );
};

export default Toolbar;
