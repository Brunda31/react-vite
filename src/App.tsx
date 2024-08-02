import { useState } from "react";
import Buttons from "./components/buttons";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import WelcomeTitle from "./components/UserInfo";
import { SlCalender } from "react-icons/sl";
import Like from "./components/Like";

function App() {
  const [setalert, settingalert] = useState(false);
  const items = ["New york", "sanfransico", "Dallas", "Seattle", "Tirupathi"];
  const onSelectItem = (item: String) => {
    console.log("Selected item: ", item);
  };

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
    </div>
  );
}

export default App;
