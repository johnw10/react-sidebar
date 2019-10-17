import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Stylednav = styled.nav`
  height: 100%;
  background: white;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  z-index: 200;
  max-width: 300px;
  transform: translateX(${props => (props.open ? "0" : "-100%")});
  transition: transform 0.5s ease-out;
`;

export const Styledul = styled.ul`
  list-style: none;
  height: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 65px;
`;

export const Styledli = styled.li`
  margin: 0.5rem 0;
`;

export const Styledlink = styled(NavLink)`
  text-decoration: none;
  color: #521751;

  :active,
  :hover {
    color: #fa923f;
  }
`;
