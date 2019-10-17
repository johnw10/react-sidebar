import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;

  :focus {
    outline: none;
  }
`;

const Styleddiv = styled.div`
  width: 30px;
  height: 2px;
  background: #fff;
`;

const DrawerToggleButton = ({ click }) => (
  <Button onClick={click}>
    <Styleddiv />
    <Styleddiv />
    <Styleddiv />
  </Button>
);

export default DrawerToggleButton;
