import React from "react";
import ReactDom from "react-dom";

//JSX記法
const App = () => {
  return (
    // <React.Fragment>これでも良い
    <>
      <h1>こんにちわ！</h1>
      <p>テストです</p>
    </>
    // </React.Fragment>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
