import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./layouts/Root.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Todos from "./pages/Todos.tsx";

const router = createBrowserRouter([
  {
    path: "/posts",
    Component: App,
    // element: <App />, // <div>Hello World</div>
  },
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "todos",
        Component: Todos,
        loader: () => fetch("https://jsonplaceholder.typicode.com/todos"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
