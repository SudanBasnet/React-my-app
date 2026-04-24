import { useState } from "react";
import "./App.css";
import Sudancomp from "./UserComponent";
import { UserBio } from "./UserComponent";
import { UserProfile } from "./Userprofile";
import { Myform } from "./MyForm";

const App = () => {
  // const [counter, setCounter] = useState(10);
  // // let counter = 12;
  // const increase = () => {
  //   setCounter(counter + 1);
  // };

  return (
    <div>
      {/* // <div className="user-page" style={{ color: "white" }}> */}
      {/* <UserProfile /> */}
      <Myform />
      {/* <Sudancomp nameProps={name} bio={bio} /> */}
      {/* <UserBio /> */}
      {/* <div>{counter}</div>
      <button onClick={increase}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button> */}
    </div>
  );
};

export default App; //one export per file
