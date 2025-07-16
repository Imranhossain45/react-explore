import { useEffect, useState } from "react";
import "./App.css";
import UserData from "./components/UserData/UserData";

function App() {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-5">
      {allData.map((userData) => (
        <UserData key={userData.id} userData={userData}></UserData>
      ))}
    </div>
  );
}

export default App;
