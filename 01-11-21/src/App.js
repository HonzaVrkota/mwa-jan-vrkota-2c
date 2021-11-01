import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import ContentItem from "./ContentItem";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("User click");
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Text</p>
        <p>Hodnota počtu: {count}</p>
        <div>
          <button onClick={handleClick}>Přičti</button>
        </div>
        <div>
          <ContentItem text="MWA" />
          <ContentItem text="WBA" />
          <ContentItem text="TEV" />
        </div>
      </header>
    </div>
  );
}

export default App;
