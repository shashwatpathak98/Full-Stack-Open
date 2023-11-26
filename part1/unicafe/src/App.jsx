import { useState } from "react";

const StatisticsLine = (props) => {
  // eslint-disable-next-line react/prop-types
  const { text, value } = props;
  return (
    <div>
      {text} {value}
    </div>
  );
};

const Statistics = (props) => {
  // eslint-disable-next-line react/prop-types
  const { good, neutral, bad } = props;
  return (
    <div>
      <h2>Statistics</h2>
      {good || neutral || bad ? (
        <div>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={good + neutral + bad} />
          <StatisticsLine
            text="average"
            value={
              (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad) || 0
            }
          />
          <StatisticsLine
            text="positive"
            value={`${(good / (good + neutral + bad)) * 100 || 0} %`}
          />
        </div>
      ) : (
        <div>No Feedback Given</div>
      )}
    </div>
  );
};

const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { onClick, text } = props;
  return (
    <span>
      <button onClick={onClick}>{text}</button>
    </span>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
