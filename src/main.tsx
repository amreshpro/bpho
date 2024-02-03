import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./App.tsx";
import Hero from "./pages/Hero";
import About from "./components/About";
import { Suspense } from "react";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Tourism from "./pages/services/Tourism.tsx";
import Education from "./pages/services/Education.tsx";
import Health from "./pages/services/Health.tsx";
import Helping from "./pages/services/Helping.tsx";
import ServiceLayout from "./components/ServiceLayout.tsx";
import Matrimonial from "./pages/services/Matrimonial.tsx";

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
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <ServiceLayout />
          </Suspense>
        ),
        errorElement:(<>
        <h1 className="text-xl text-center w-full text-red-500">Error in Service</h1>
        </>),
        children: [
            {
                path: "",
                element: <Services />,
              },
              {
                path: "matrimonial",
                element: <Matrimonial />,
              },
          {
            path: "tourism",
            element: <Tourism />,
          },   {
            path: "education",
            element: <Education />,
          },   {
            path: "health",
            element: <Health />,
          },   {
            path: "helping",
            element: <Helping />,
          },
        ],
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
