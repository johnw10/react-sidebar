import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Styledheader = styled.header`
  position: static;
  width: 100%;
  background: #CCCCCC;
  height: 56px;
  margin-top:170px;
`;

export const Styledul = styled.ul`
  text-decoration: none;
  color: white;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const Styledli = styled.li`
  padding: 0 0.5rem;
`;

export const Styleda = styled.a`
  color: #f51963;
  text-decoration: none;
  font-size: 1.7rem;
  font-family: "Avenir Next";
`;

export const Stylednav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const Styleddiv = styled.div`
  margin-left: 1.5rem;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  color: #f51963;
  text-decoration: none;
  padding: 0 15px 0px 17px;

  :hover,
  :active {
    color: #fa923f;
  }
`;
