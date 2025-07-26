import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./component/Home/Home";
import About from "./component/About/About";
import Portfolio from "./component/Portfolio/Portfolio";
import Contact from "./component/Contact/Contact";
import Layout from "./component/Layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
    { path: "*", element: <h1>404 Eror</h1> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
