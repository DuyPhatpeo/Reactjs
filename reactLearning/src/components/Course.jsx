export default function Courses() {
  const courses = ["Javascrip", "HTML", "CSS"];

  const renderUi = () => {
    return (
      <ul>
        {courses.map((courses, index) => {
          return <li key={index}>{courses}</li>;
        })}
      </ul>
    );
  };

  return renderUi();
}
