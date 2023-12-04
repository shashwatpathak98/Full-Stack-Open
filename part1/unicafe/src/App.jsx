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
        <table>
          <tbody>
          <tr>
            <td>
              <StatisticsLine text="good" value={good} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticsLine text="neutral" value={neutral} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticsLine text="bad" value={bad} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticsLine text="all" value={good + neutral + bad} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticsLine
                text="average"
                value={
                  (good * 1 + neutral * 0 + bad * -1) /
                    (good + neutral + bad) || 0
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticsLine
                text="positive"
                value={`${(good / (good + neutral + bad)) * 100 || 0} %`}
              />
            </td>
          </tr>
          </tbody>
        </table>
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
