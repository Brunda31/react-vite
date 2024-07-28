import React, { Children } from "react";

interface props {
  children: String;
  color?: String;
  onClick: () => void;
}

const Buttons = ({ children, color, onClick }: props) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {children}
    </button>
  );
};

export default Buttons;
