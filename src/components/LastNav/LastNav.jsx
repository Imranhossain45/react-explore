import { useContext } from "react";
import { CountContext } from "../Context/CountContext";

const LastNav = () => {
  const countState = useContext(CountContext)
  return (
    <div>LastNav- {countState}</div>
  )
}

export default LastNav