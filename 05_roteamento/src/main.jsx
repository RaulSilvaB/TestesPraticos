import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// 1 roteamento básico
import SearchForm from "./components/SearchForm.jsx";
import Search from "./components/Search.jsx";
import Home from "./components/Home.jsx";
import Contato from "./components/Contato";
import Sobre from "./components/Sobre";

//2 rota paremetrizada
import User from "./components/User";
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
      {
        path: "/usuarios/:userId",
        element: <User />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
