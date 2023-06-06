import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const courseStore = (set) => ({
  courses: [], // initial course
  addCourse: (course) => {
    set((state) => {
      courses: [course, ...state.courses];
    });
  },
  removeCourse: (courseId) => {
    set((state) => {
      set((state) => ({
        courses: state.courses.filter((e) => e.id !== id), //keeping the courses that not matches the id
      }));
    });
  },
  toggleCourseStatus: (courseId) => {
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === courseId
          ? { ...course, completed: !course.completed }
          : course
      ),
    }));
  },
});

const useCourseStore = create(
  devtools(
    persist(courseStore, {
      name: "courses",
    })
  )
);
export default useCourseStore;