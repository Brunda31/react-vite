import { ReactNode } from "react";

interface props {
  children: ReactNode; //instead of    text : String we give children : ReactNode for <span> component to be given....
}

const Alert = ({ children }: props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
