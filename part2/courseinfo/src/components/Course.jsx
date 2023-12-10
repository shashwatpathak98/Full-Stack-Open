import Header from "./Header";

const Course = ({ course }) => {
  return (
    <div>
      <Header text={course.name} />
    </div>
  );
};

export default Course;
