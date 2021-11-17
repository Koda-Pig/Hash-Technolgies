import React from "react";

/**
 * @packages
 */
import {
  ReactLocation,
  Router,
} from "react-location";

/**
 * @pages
 */
import Home from "./Pages/Home/Home";

const location = new ReactLocation();

export default function App() {
  return (
    <>
      <Router
        location={location}
        routes={[
          {
            path: "/",
            element: <Home />,
          },
          // {
          //   path: "/about",
          //   element: <Home />,
          // },
        ]}
      />
    </>
  );
}
