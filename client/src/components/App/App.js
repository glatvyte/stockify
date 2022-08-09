import { useState } from "react";
import Filter from "../Filter/Filter";
import Results from "../Results/Results";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const search = () => {
    console.log(inputValue, "inputValue");
    console.log("searchinam");
  };

  return (
    <div className="App">
      <Filter onTermSubmit={search} onInputValueChange={setInputValue} />
      <Results />
    </div>
  );
};

export default App;
