import { useState } from "react";
import Buttons from "./components/buttons";
import Alert from "./components/Alert";

function App() {
  const [setalert, settingalert] = useState(false);

  return (
    <div>
      {setalert && <Alert onClose={() => settingalert(false)}>My Alert</Alert>}
      <Buttons color="secondary" onClick={() => settingalert(true)}>
        My Button
      </Buttons>
    </div>
  );
}

export default App;
