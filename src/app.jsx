import React from "react";

//JSX記法
const App = () => {
  const onClickButton = () => {};
  const contentStyle = {
    backgroundColor: "pink"
  };
  return (
    // <React.Fragment>これでも良い
    <>
      <h1 style={{ color: "red" }}>こんにちわ！</h1>
      <p style={contentStyle}> テストですね</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
    // </React.Fragment>
  );
};

export default App;
