import React from "react";

interface Props {
  cartItems: string[];
}
const cart: React.FC<Props> = ({ cartItems }) => {
  return (
    <ul>
      {cartItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default cart;
