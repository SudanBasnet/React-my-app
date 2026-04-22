import { useState } from "react";
import "./App.css";
import Sudancomp from "./UserComponent";
import { UserBio } from "./UserComponent";

const App = () => {
  const [counter, setCounter] = useState(10);
  // let counter = 12;
  const increase = () => {
    setCounter(counter + 1);
  };
  console.log(counter);
  const decrease = () => {
    setCounter(counter - 1);
  };
  console.log(counter);

  return (
    <>
      {/* <Sudancomp nameProps={name} bio={bio} /> */}
      {/* <UserBio /> */}
      <div>{counter}</div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  );
};

export default App; //one export per file
