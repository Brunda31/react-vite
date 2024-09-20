import { useState } from "react";
import Buttons from "./components/buttons";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import WelcomeTitle from "./components/UserInfo";
import { SlCalender } from "react-icons/sl";
import Like from "./components/Like";
import Message from "./Message";
import Navbar from "./components/Navbar";
import cart from "./components/cart";

function App() {
  const [setalert, settingalert] = useState(false);
  const items = ["New york", "sanfransico", "Dallas", "Seattle", "Tirupathi"];
  const onSelectItem = (item: String) => {
    console.log("Selected item: ", item);
  };

  const [drink, setDrink] = useState({
    title: "Cool Drink",
    price: 10,
    type: {
      sweet: "coke",
      sour: "limca",
    },
  });

  const [tag, setTag] = useState(["cheerful", "happy"]);

  const [bug, setBug] = useState([
    { id: 1, title: "bug1", fixed: false },
    { id: 2, title: "bug2", fixed: false },
  ]);

  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    const newDrink = {
      title: drink.title,
      price: 6,
    };
    // setDrink(newDrink);
    setDrink({ ...drink, type: { ...drink.type, sweet: "pepsi" } }); //another way to update without updating object

    setTag([...tag, "happy"]);
    setTag(tag.filter((tag) => tag !== "happy"));
    setTag(
      tag.map(
        (tag) => (tag === "cheerful" ? "cheerful and excited " : tag),
        tag.filter((tag) => tag !== "happy")
      )
    );

    setBug(bug.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  setGame({ ...game, player: { ...game.player, name: "Bob" } });
  return (
    <div>
      <h1>Hi..!</h1>
      <hr></hr>
      <hr></hr>
      <ListGroup
        heading="Cities"
        onSelectItem={onSelectItem}
        items={items}
      ></ListGroup>
      {setalert && <Alert onClose={() => settingalert(false)}>My Alert</Alert>}
      <Buttons color="secondary" onClick={() => settingalert(true)}>
        Alert Button
      </Buttons>
      <WelcomeTitle></WelcomeTitle>
      <Like onClick={() => console.log("Clicked!")}></Like>
      <Message />
      <Message />
      <hr></hr> <hr></hr>
      <p>{drink.price}</p>
      <p>{tag}</p>
      <button onClick={handleClick}>Click me</button>
      <ol>
        {bug.map((bug) => (
          <li key={bug.id}>
            {bug.title} --- {bug.fixed ? "Fixed" : "Not Fixed"}
          </li>
        ))}
      </ol>
      <p>{game.player.name}</p>
    </div>
  );
}

export default App;
