import React, { useEffect, useState } from "react";
import ColorfullMessage from "./components/ColorfullMessage";

//JSX記法
const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num, faceShowFlag]);

  return (
    // <React.Fragment>これでも良い
    <>
      <h1 style={{ color: "red" }}>こんにちわ！</h1>
      <ColorfullMessage color="blue" message="お元気ですか？" />
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ^ω^ )</p>}
    </>
    // </React.Fragment>
  );
};

export default App;
