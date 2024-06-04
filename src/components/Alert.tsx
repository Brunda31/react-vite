import { ReactNode } from "react";
import App from "../App";

interface props {
  children: ReactNode; //instead of    text : String we give children : ReactNode for <span> component to be given....
  onClose: () => void;
}

const Alert = ({ children, onClose }: props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button type="button" className="btn-close" onClick={onClose}></button>
    </div>
  );
};

export default Alert;
