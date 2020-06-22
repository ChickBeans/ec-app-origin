import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "./reducks/users/actions";

function App() {

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  console.log(selector.users);

  return (
    <div className="App">
        <button onClick={() => dispatch(signInAction({uid: "00001", username: "honda"}))}>Dispatch</button>
    </div>
  );
}

export default App;
