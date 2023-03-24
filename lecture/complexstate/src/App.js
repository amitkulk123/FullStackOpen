import { useState } from "react";

const History = ({ allClicks }) => {
  // an example of conditional rendering
  if (allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return (
    <div>
      <b>history: </b>
      {allClicks.join(" ")}
    </div>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  // "...clicks" is using object spread, alternative would be "right: clicks"
  const handleLeftClick = () => {
    // we need this const updatedLeft bc otherwise the total wouldn't show the updated value properly due to the async nature of states
    const updatedLeft = clicks.left + 1;
    setClicks({ ...clicks, left: updatedLeft });
    // alternative would be allClicks.push('L') but that wouldn't be good practice
    setAll(allClicks.concat("L"));
    setTotal(updatedLeft + clicks.right);
  };

  // "...clicks" using object spread, alternative would be "left: clicks" as follows
  const handleRightClick = () => {
    const updatedRight = clicks.right + 1;
    const newClicks = {
      left: clicks.left,
      right: updatedRight,
    };
    setClicks(newClicks);
    setAll(allClicks.concat("R"));
    setTotal(clicks.left + updatedRight);
  };

  // we can't just do clicks.right++ because that would be mutating state which is forbidden

  return (
    <div>
      {clicks.left}
      <Button handleClick={handleLeftClick} text="left" />
      <Button handleClick={handleRightClick} text="right" />
      {clicks.right}
      {/* <p>{allClicks.join(" ")}</p> */}
      <History allClicks={allClicks} />
      <p>total {total}</p>
    </div>
  );
};

export default App;
