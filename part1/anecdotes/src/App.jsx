import { useState } from "react";

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
  const [vote, setVote] = useState(new Uint8Array(anecdotes.length));

  const getRandomNumbers = () => {
    return Math.floor(Math.random() * anecdotes.length);
  };

  const fetchVote = () => {
    const copyVote = [...vote];
    copyVote[selected]++;
    return copyVote;
  };
  // console.log(vote);
  let max = Number(Math.max(...vote));
  let idx = 0;
  for (let index = 0; index < vote.length; index++) {
    if (vote[index] === max) {
      idx = index;
    }
  }
  // console.log(max, idx);
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div> {anecdotes[selected]} </div>
      <div> has {vote[selected]} votes</div>
      <Button onClick={() => setVote(fetchVote)} text="vote" />
      <Button
        onClick={() => setSelected(getRandomNumbers)}
        text="next anecdote"
      />
      <h1>Anecdote with most votes</h1>
      <div>
        {anecdotes[idx]} <br /> has {vote[idx]} votes
      </div>
    </div>
  );
};

export default App;
