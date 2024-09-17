import React from "react";
import { Card } from "./Card";

export default function Cards({ course, currentCategory }) {
  console.log("cources -- ", course);
  console.log("currunt categoury --> ", currentCategory);

  function getAllCourses() {
    if (currentCategory === "All") {
      let allCourses = [];
      Object.values(course).forEach((cat) => {
        // Loop over each array of courses within a category
        cat.forEach((co) => {
          allCourses.push(co); // Add each course to the allCourses array
        });
      });

      return allCourses;
    } else {
      console.log("else ---", course[currentCategory]);

      console.log("else ---", course);

      return course[currentCategory];
    }
  }

  return (
    <div className="mt-2 h-full w-2/3  m-auto md:max-h-96  flex flex-wrap gap-4 justify-center  box-content ">
      {getAllCourses().map((obj) => {
        return <Card key={obj.id} object={obj} />;
      })}
    </div>
  );
}
