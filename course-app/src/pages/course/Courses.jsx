import React from "react";
import { Link, redirect, useLoaderData, useSubmit } from "react-router";

export default function Courses() {
  const courses = useLoaderData();
  const submit = useSubmit();

  const handleDelete = (id) => {
    const confirm = window.confirm("emin misiniz");
    if (confirm) {
      submit(null, {
        method: "DELETE",
        action: "/courses/" + id + "/delete",
      });
    }
  };

  return (
    <>
      <div id="courses">
        {courses.map((item) => (
          <div className="card" key={item.id}>
            <img src={`http://localhost:5000/images/${item.image}`} alt="" />
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <Link style={{ marginRight: 10 }} to={"/courses/" + item.id}>
                Detay
              </Link>
              <Link style={{ marginRight: 10 }} to={item.id + "/edit"}>
                Edit
              </Link>
              <button type="submit" onClick={() => handleDelete(item.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export async function courseLoader() {
  const res = await fetch("http://localhost:5000/courses");

  if (!res.ok) {
    throw new Response("Kurs listesi yüklenemedi", { status: 500 });
  }
  return res.json();
}

export async function courseDeleteAction({ params, request }) {
  const { courseId } = params;
  const res = await fetch("http://localhost:5000/courses/" + courseId, {
    method: request.method,
  });

  if (res.ok) {
    return redirect("/courses");
  }
}
