import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy chicken pizza",
    toppings: ["Mushroom"],
  });

  const [carts, setCarts] = useState({
    discount: 0.1,
    items: [
      { id: 1, name: "Product 1", quantity: 1 },
      { id: 2, name: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Chicken"] });
  };

  setCarts({
    ...carts,
    items: carts.items.map((items) =>
      items.id === 1 ? { ...items, quantity: 2 } : items
    ),
  });

  return (
    <div>
      <h2>{pizza.name}</h2>
      <p>Toppings : {pizza.toppings.join(" , ")}</p>
      <p>{carts.discount}</p>
      {carts.items.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - Quantity: {item.quantity}
          </p>
        </div>
      ))}
      <button onClick={handleClick}>Click here to update Toppings</button>
    </div>
  );
}

export default App;
