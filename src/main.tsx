import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./App.tsx";
import Hero from "./pages/Hero";
import About from "./components/About";
import { Suspense } from "react";
import Services from "./components/Services";
import Contact from "./components/Contact";




const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: (
      <h1 className="text-red-500 w-screen text-center p-2 ">
        Error Something Went Wrong
      </h1>
    ),
    children: [
      {
        path: "/",
        element: (
          <div>
            <Hero />
          </div>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Suspense fallback={<h1>Loading....</h1>}><Services /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/*",
        element: <h1>Hello Page Not found</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);