import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./Pages/Index.jsx";
import CreateCategory from "./Pages/CreateCategory.jsx";
import ErrorNotFound from "./Pages/ErrorNotFound.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Index />, errorElement: <ErrorNotFound /> },

  {
    path: "/createCategory",
    element: <CreateCategory />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
