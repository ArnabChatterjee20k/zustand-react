import React, { useState } from "react";
import useCourseStore from "../app/courseStore";

export default function CourseForm() {
  const [courseTitle, setCourseTitle] = useState("");
  const addCourse = useCourseStore((state) => state.addCourse);
  console.log("CourseForm Rendered");

  const handleSubmit = () => {
    addCourse({
      id: Math.ceil(Math.random() * 1000),
      title: courseTitle,
      completed:false
    });
  };

  return (
    <div className="form-container">
      <input
        type="text"
        className="form-input"
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
      />
      <button className="form-submit-btn" onClick={() => {
            handleSubmit();
        }}>
        Add
      </button>
    </div>
  );
}
