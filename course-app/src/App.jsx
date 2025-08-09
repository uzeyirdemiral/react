import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Home from "./pages/Home";
import Courses, {
  courseDeleteAction,
  courseLoader,
} from "./pages/course/Courses";
import About from "./pages/About";
import MainLayouts from "./layouts/MainLayouts";
import HelpLayouts from "./layouts/HelpLayouts";
import Contact from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import CourseLayout from "./layouts/CourseLayout";
import CourseDetail, { courseDetailLoader } from "./pages/course/CourseDetail";
import CourseCreate from "./pages/course/CourseCreate";
import CourseEdit from "./pages/course/CourseEdit";
import { courseAction } from "./pages/course/CourseForm";
import NotFound from "./pages/error/NotFound";
import Error from "./pages/error/Error";

function App() {
  // const route1 = createRoutesFromElements(
  //   <Route>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/home" element={<Home />} />
  //     <Route path="/courses" element={<Courses />} />
  //     <Route path="/about" element={<About />} />
  //   </Route>
  // );
  //  **********
  // const routes2 = [
  //   { path: "/", element: <Home /> },
  //   { path: "/home", element: <Home /> },
  //   { path: "/courses", element: <Courses /> },
  //   { path: "/about", element: <About /> },
  // ];
  // const route = createBrowserRouter(routes2);
  // ******

  // const route = createBrowserRouter([
  //   { path: "/", element: <Home /> },
  //   { path: "/home", element: <Home /> },
  //   { path: "/courses", element: <Courses /> },
  //   { path: "/about", element: <About /> },
  // ]);
  // **********
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        // { path: "courses", element: <Courses />, loader: courseLoader },
        { path: "about", element: <About /> },
        {
          path: "courses",
          element: <CourseLayout />,
          errorElement: <Error />,
          children: [
            {
              index: true,
              element: <Courses />,
              loader: courseLoader,
            },
            {
              id: "course-details",
              path: ":courseId",
              loader: courseDetailLoader,
              children: [
                {
                  index: true,
                  element: <CourseDetail />,
                },
                {
                  path: "edit",
                  element: <CourseEdit />,
                  action: courseAction,
                },
                {
                  path: "delete",
                  action: courseDeleteAction,
                },
              ],
            },
            { path: "create", element: <CourseCreate />, action: courseAction },
          ],
        },
        {
          path: "help",
          element: <HelpLayouts />,
          children: [
            { path: "contact", element: <Contact /> },
            { path: "faq", element: <Faq /> },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
