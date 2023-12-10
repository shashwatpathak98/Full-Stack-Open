const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => {
        return (
          <div key={part.id} style={{ marginBottom: "12px" }}>
            <span>{part.name}</span>&nbsp;<span>{part.exercises}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
