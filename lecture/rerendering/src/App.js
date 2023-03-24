import { useState } from "react";

// const App = (props) => {
//   const { counter } = props;
//   return <div>{counter}</div>;
// };

// default
// const Display = ({ counter }) => {
//   return <div>{counter}</div>;
// };
// shorthand
const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  // destructuring again
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  // for one-line functions, you don't need braces
  const reset = () => setCounter(0);

  // setTimeout(() => setCounter(counter + 1), 1000);
  // console.log("rendering...", counter);
  // return <div>{counter}</div>;

  return (
    <div>
      {/* <div>{counter}</div> */}
      <Display counter={counter} />
      <Button onClick={increment} text="plus" />
      <Button onClick={decrement} text="minus" />
      <Button onClick={reset} text="reset" />
    </div>
  );
};

export default App;
