const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises &nbsp;&nbsp; {props.total}</p>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} &nbsp; {props.exercises}
      </p>
    </div>
  );
};

const Content = (props) => {
  const { parts } = props;
  return (
    <div>
      {parts.map((part) => (
        <Part part={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  const total = course.parts.reduce((acc, curr) => curr.exercises + acc, 0);

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  );
};

export default App;
