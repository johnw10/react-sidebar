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

const DivLine = styled.div`
  width: 30px;
  height: 2px;
  background: white;
`;

const CloseButton = ({ click }) => {
  return (
    <Button>
      <DivLine className="toggle-button__line" />
      <DivLine className="toggle-button__line" />
      <DivLine className="toggle-button__line" />
    </Button>
  );
};

export default CloseButton;
