import "./App.css";
import Profile from "./UserComponent";
import { UserBio } from "./UserComponent";

const App = () => {
  return (
    <>
      <Profile />
      <UserBio />
    </>
  );
};

export default App; //one export per file
