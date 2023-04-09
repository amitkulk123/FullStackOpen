const Header = ({ coursename }) => {
  return (
    <div>
      <h1>{coursename}</h1>
    </div>
  );
};

const Part = ({ note }) => {
  return (
    <p>
      {note.name} {note.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  // sum the exercises in each part using array reduce
  const initialValue = 0;
  const total = parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, initialValue);

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} note={part} />
      ))}
      <p>
        <strong>total of exercises {total}</strong>
      </p>
    </div>
  );
};

const Course = (props) => {
  return (
    <div>
      {props.courses.map((course) => (
        <div key={course.id}>
          <Header coursename={course.name} />
          <Content parts={course.parts} />
        </div>
      ))}
    </div>
  );
};

export default Course;
