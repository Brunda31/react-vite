import { ReactNode } from "react";
import App from "./Form";
import styled from "styled-components";

interface props {
  children: ReactNode; //instead of text : String, we give children : ReactNode for <span> component to be given....
  onClose: () => void;
}

interface bprops {
  type?: string;
}

const Bu = styled.button<bprops>`
  margin: 30 px;
  background-color: "green";
  padding: 20px;
`;

const Alert = ({ children, onClose }: props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <Bu type="button" className="btn-close" onClick={onClose}></Bu>
    </div>
  );
};

export default Alert;
