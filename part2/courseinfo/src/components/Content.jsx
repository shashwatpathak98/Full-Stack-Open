const Content = ({ parts }) => {
  const sumOfExercises = () => {
    let sum = 0;

    for (let index = 0; index < parts.length; index++)
      sum += parts[index].exercises;
    return sum;
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
      <div>{`total of ${sumOfExercises()}`}</div>
    </div>
  );
};

export default Content;
