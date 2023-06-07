import React from "react";
import useCourseStore from "../app/courseStore";
export default function CourseList() {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    })
  );
  console.log(courses);
  return (
    <>
      {courses.map(({ id, title, completed }) => {
        return (
          <div className="card" key={id}>
            <h2>ID: {id}</h2>
            <h3>Name: {title}</h3>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={completed}
                onChange={(e) => {
                  toggleCourseStatus(id);
                }}
              />
              <span className="slider"></span>
            </label>
            <button className="remove-button" onClick={(e) => removeCourse(id)}>
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
}
