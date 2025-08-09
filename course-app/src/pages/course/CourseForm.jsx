import { Form, redirect, useActionData, useNavigation } from "react-router";
import { IsRequiredCheck, IsValidImage } from "../../utils/validations";

export default function CourseForm({ method, data }) {
  const navigation = useNavigation();
  const IsSubmitting = navigation.state == "submitting";
  const result = useActionData();

  return (
    <Form method={method}>
      {result && result.errors && (
        <ul className="errors">
          {Object.values(result.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <div>
        <label htmlFor="title">Title:</label>
        <input
          style={{ color: "#000" }}
          type="text"
          name="title"
          id="title"
          defaultValue={data ? data.title : ""}
        />
        {result && result.title && <p>{result.title}</p>}
      </div>
      <div>
        <label htmlFor="image">İmage</label>
        <input
          style={{ color: "#000" }}
          type="text"
          name="image"
          id="image"
          defaultValue={data ? data.image : ""}
        />
        {result && result.image && <p>{result.image}</p>}
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          style={{ color: "#000" }}
          name="description"
          id="description"
          rows={5}
          defaultValue={data ? data.description : ""}
        ></textarea>
        {result && result.description && <p>{result.description}</p>}
      </div>
      <button disabled={IsSubmitting} type="submit">
        {IsSubmitting ? "Kayıt Ediliyor" : "Kaydet"}
      </button>
    </Form>
  );
}

export async function courseAction({ request, params }) {
  const data = await request.formData();
  const method = request.method;

  let url = "http://localhost:5000/courses";
  if (method === "PUT") {
    const courseId = params.courseId;
    url = url + "/" + courseId;
  }
  const formData = {
    title: data.get("title"),
    image: data.get("image"),
    description: data.get("description"),
  };

  const errors = {};

  if (!IsRequiredCheck(formData.title)) {
    errors.title = "title alani zorunludur";
  }
  if (!IsValidImage(formData.image)) {
    errors.image = "Image alani zorunludur ve jpg uzantili olmalidir";
  }
  if (!IsRequiredCheck(formData.description)) {
    errors.description = "Description alani zorunludur";
  }
  console.log(errors);

  if (Object.keys(errors).length) {
    return errors;
  }

  const response = await fetch(url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (response.status === 403) {
    return response;
  }

  if (response.ok) {
    return redirect("/courses");
  }
}
