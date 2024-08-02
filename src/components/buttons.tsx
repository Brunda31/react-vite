import React, { Children } from "react";
import styled from "styled-components";

interface ButtonC {
  active?: boolean;
  onClick: () => void;
}

const Bu = styled.button<ButtonC>`
  padding: 30px;
  background-color: ${(props) => (props.active ? "green" : "yellow")};
`;

interface props {
  children: String;
  color?: String;
  onClick: () => void;
}

const Buttons = ({ children, color, onClick }: props) => {
  return (
    <Bu className="btn btn-primary" onClick={onClick}>
      {children}
    </Bu>
  );
};

export default Buttons;
