import React, { useState } from "react";
import ColorfullMessage from "./components/ColorfullMessage";

//JSX記法
const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    // <React.Fragment>これでも良い
    <>
      <h1 style={{ color: "red" }}>こんにちわ！</h1>
      <ColorfullMessage color="blue" message="お元気ですか？" />
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <p>{num}</p>
      <p>( ^ω^ )</p>
    </>
    // </React.Fragment>
  );
};

export default App;
