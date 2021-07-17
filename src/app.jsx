import React from "react";
import ColorfullMessage from "./components/ColorfullMessage";

//JSX記法
const App = () => {
  const onClickButton = () => {};

  return (
    // <React.Fragment>これでも良い
    <>
      <h1 style={{ color: "red" }}>こんにちわ！</h1>
      <ColorfullMessage />
      <button onClick={onClickButton}>ボタン</button>
    </>
    // </React.Fragment>
  );
};

export default App;
