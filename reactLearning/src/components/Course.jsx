export default function Courses() {
  const courses = [
    { name: "Javascript", price: "1000" },
    { name: "HTML", price: "500" },
    { name: "CSS", price: "200" },
  ];

  return (
    <div>
      <ul>
        {courses.map((course, index) => {
          return (
            <>
              {course.price >= 500 ? (
                <li key={index}>
                  Name: {course.name}, Price: {course.price}
                </li>
              ) : (
                ""
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
}
