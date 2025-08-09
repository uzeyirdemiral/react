import React from "react";
import { Outlet, Link } from "react-router";

function CourseLayout() {
  return (
    <div id="course-layout">
      <h1>Course List</h1>
      <Link to={"create"}>New Course</Link>
      <Outlet />
    </div>
  );
}

export default CourseLayout;
