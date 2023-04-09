import { useState } from "react";

const Display = (props) => <div>{props.value}</div>;

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => () => {
    console.log("value now", newValue); // print the new value to console
    // const handler = () => {
    //   console.log("hello", who);
    // }
    // return handler;

    setValue(newValue);
  };

  return (
    <div>
      <Display value={value} />
      <Button handleClick={setToValue(1000)} text="thousand" />
      <Button handleClick={setToValue(0)} text="reset" />
      <Button handleClick={setToValue(value + 1)} text="increment" />
    </div>
  );

  // ALTERNATIVE SYNTAX:
  // const setToValue = (newValue) => {
  //   console.log('value now', newValue)
  //   setValue(newValue)
  // }

  // return (
  //   <div>
  //     {value}
  //     <button onClick={() => setToValue(1000)}>
  //       thousand
  //     </button>
  //     <button onClick={() => setToValue(0)}>
  //       reset
  //     </button>
  //     <button onClick={() => setToValue(value + 1)}>
  //       increment
  //     </button>
  //   </div>
  // )
};

export default App;
