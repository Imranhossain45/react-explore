import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { CountContext } from "./components/Context/CountContext";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={count}>
        <Navbar></Navbar>
        <button onClick={() => setCount(count + 1)}>Count - {count}</button>
      </CountContext.Provider>
    </div>
  );
}

export default App;
