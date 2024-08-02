import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface props {
  onClick: () => void;
}

const Like = ({ onClick }: props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status)
    return <AiFillHeart color="Violet" size="50px" onClick={toggle} />;
  return <AiOutlineHeart size="50px" onClick={toggle} />;
};

export default Like;
