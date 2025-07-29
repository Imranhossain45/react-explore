import React, { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [plus, setPlus] = useState(0);
  const [minus, setMinus] = useState(0);
  const handlePlus = () => {
    setPlus(plus + 1);
  };
  const handleMinus = () => {
    setMinus(minus + 1);
  };
  const checking = useMemo(() => {
    console.log(".....");
    for (let i = 0; i < 900000000; i++) {}
    return plus % 2 === 0;
  }, [plus]);
  return (
    <div>
      <h4>Checking - {checking ? "Even" : "Odd"}</h4>
      <button onClick={handlePlus}>Plus -{plus}</button>
      <hr />
      <button onClick={handleMinus}>Minus -{minus}</button>
    </div>
  );
}

export default App;
