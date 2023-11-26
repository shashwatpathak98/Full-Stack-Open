import { useState } from "react";

const Statistics = (props) => {
  // eslint-disable-next-line react/prop-types
  const { good, neutral, bad } = props;
  return (
    <div>
      <h2>Statistics</h2>
      {good || neutral || bad ? (
        <div>
          <div>good {good}</div>
          <div>neutral {neutral}</div>
          <div>bad {bad}</div>
          <div>all {good + neutral + bad}</div>
          <div>
            average{" "}
            {(good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad) || 0}
          </div>
          <div>positive {(good / (good + neutral + bad)) * 100 || 0} %</div>
        </div>
      ) : (
        <div>No Feedback Given</div>
      )}
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
