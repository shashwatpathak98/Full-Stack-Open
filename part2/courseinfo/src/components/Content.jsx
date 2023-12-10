const Content = ({ parts }) => {
  const sumOfExercises = () => {
    return parts.reduce((prev,curr) => prev + curr.exercises , 0)
  };

  return (
    <div>
      {parts.map((part) => {
        return (
          <div key={part.id} style={{ marginBottom: "12px" }}>
            <span>{part.name}</span>&nbsp;<span>{part.exercises}</span>
          </div>
        );
      })}
      <div><b>{`total of ${sumOfExercises()} exercises`}</b></div>
    </div>
  );
};

export default Content;
