import React from "react";
import { useLoaderData, useParams, useRouteLoaderData } from "react-router";

export default function CourseDetail() {
  //   const { courseId } = useParams(); // id yi almamızı sağlar
  const course = useRouteLoaderData("course-details");

  return (
    <div className="course-details">
      <h1>{course.title}</h1>
      <div className="course-desc">
        <img
          src={`http://localhost:5000/images/${course.image}`}
          alt={course.title}
        />
        <div>
          <div>{course.description}</div>
          <div className="icons">
            <span>
              <i className="fa-regular fa-user">{course.users}</i>
            </span>
            <span>
              <i className="fa-regular fa-thumbs-up">{course.likes}</i>
            </span>
            <span>
              <i className="fa-regular fa-comment">{course.comments}</i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function courseDetailLoader({ params }) {
  const { courseId } = params; // id yi almayı sağlar
  const res = await fetch("http://localhost:5000/courses/" + courseId);

  if (!res.ok) {
    throw new Response("Kurs Bulunamadi", { status: 404 });
  }
  return res.json();
}
