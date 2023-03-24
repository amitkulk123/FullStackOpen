import { useState } from "react";

const Statistics = ({ anecdotes, allPoints }) => {
  // better solution is to just use an array from the start
  const point_values = Object.values(allPoints);
  const maxIndex = point_values.indexOf(Math.max(...point_values));
  return (
    <div>
      <p>{anecdotes[maxIndex]}</p>
      <p>has {allPoints[maxIndex]} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({
    0: 1,
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
    7: 1,
  });

  const handleVote = () => {
    const copy = { ...points };
    // increment the property of selected value by one
    copy[selected] += 1;
    setPoints(copy);
  };
  const handleNext = () => {
    const randInt = Math.floor(Math.random() * anecdotes.length);
    console.log("selected is " + randInt);
    console.log(points);
    setSelected(randInt);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {points[selected]} points</p>
      <div>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleNext}>next anecdote</button>
      </div>
      <h1>Anecdote with the most votes</h1>
      <Statistics anecdotes={anecdotes} allPoints={points} />
    </div>
  );
};

export default App;
