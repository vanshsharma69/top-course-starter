import React from "react";
import Card from "./Card";

function Cards({ courses, category }) {
  const [likedcourses, setLikedCourses] = React.useState([]);

  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      return courses[category] || [];
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4 sm:p-6 lg:p-8">
      {getCourses().map((course, index) => (
        <Card
          key={index}
          course={course}
          likedcourses={likedcourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
}

export default Cards;
