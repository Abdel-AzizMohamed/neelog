import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Index from "./Pages/Index.jsx";
import CreateCategory from "./Pages/CreateCategory.jsx";
import CreateArticle from "./Pages/CreateArticle.jsx";
import ErrorNotFound from "./Pages/ErrorNotFound.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Index />, errorElement: <ErrorNotFound /> },

  {
    path: "/createCategory",
    element: <CreateCategory />,
  },
  { path: "/createArticle", element: <CreateArticle /> },
]);

library.add(fas);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
