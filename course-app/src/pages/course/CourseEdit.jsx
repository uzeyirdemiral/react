import React from "react";
import CourseForm from "./CourseForm";
import { useRouteLoaderData } from "react-router";

function CourseEdit() {
  const course = useRouteLoaderData("course-details");
  return <CourseForm data={course} method="PUT" />;
}

export default CourseEdit;
