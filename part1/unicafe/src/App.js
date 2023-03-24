import { useEffect, useState } from "react";

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = (props) => {
  if (props.allVal == 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.goodVal} />
          <StatisticLine text="neutral" value={props.neutralVal} />
          <StatisticLine text="bad" value={props.badVal} />
          <StatisticLine text="all" value={props.allVal} />
          <StatisticLine text="average" value={props.averageVal} />
          <StatisticLine text="positive" value={props.positiveVal} />
        </tbody>
      </table>
    </div>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGood = () => {
    const updateGood = clicks.good + 1;
    setClicks({
      ...clicks,
      good: updateGood,
    });
    // update total and set average clicks equal to (clicks.good - clicks.bad) / total
    const updatedTotal = total + 1;
    setTotal(updatedTotal);
    setAverage((updateGood - clicks.bad) / updatedTotal);
    setPositive((clicks.good / updatedTotal) * 100 + " %");
  };

  const handleNeutral = () => {
    // setNeutral(neutral + 1);
    const updateNeutral = clicks.neutral + 1;
    setClicks({
      ...clicks,
      neutral: updateNeutral,
    });
    const updatedTotal = total + 1;
    setTotal(updatedTotal);
    setAverage((clicks.good - clicks.bad) / updatedTotal);
    setPositive((clicks.good / updatedTotal) * 100 + " %");
  };
  const handleBad = () => {
    // setBad(bad + 1);
    const updateBad = clicks.bad + 1;
    setClicks({
      ...clicks,
      bad: updateBad,
    });
    const updatedTotal = total + 1;
    setTotal(updatedTotal);
    setAverage((clicks.good - updateBad) / updatedTotal);
    setPositive((clicks.good / updatedTotal) * 100 + " %");
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <h1>statistics</h1>
      <Statistics
        goodVal={clicks.good}
        neutralVal={clicks.neutral}
        badVal={clicks.bad}
        allVal={total}
        averageVal={average}
        positiveVal={positive}
      />
    </div>
  );
};

export default App;
