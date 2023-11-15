import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SinglePage from "./pages/SinglePage";
import { useGlobalContext } from "./hooks/useGlobalContext";
import LogIn from "./pages/LogIn";
import Bookmark from "./pages/Bookmark";
import Profile from "./pages/Profile";

function App() {
  const { user, onAuthChange } = useGlobalContext();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout user={user} />,
      children: [
        {
          index: true,
          element: <Home user={user} />,
        },
        {
          path: "signUp",
          element: <SignUp />,
        },
        {
          path: "singlePage/:id",
          element: <SinglePage />,
        },
        {
          path: "logIn",
          element: <LogIn />,
        },
        {
          path: "bookmark",
          element: <Bookmark />,
        },
        {
          path: "bookmark/singlePage/:id",
          element: <SinglePage />,
        },
        {
          path: "profile",
          element: <Profile user={user} />,
        },
        {
          path: "profile/signUp",
          element: <SignUp />,
        },
      ],
    },
  ]);
  // console.log(onAuth);

  return <>{onAuthChange && <RouterProvider router={routes} />}</>;
}

export default App;
