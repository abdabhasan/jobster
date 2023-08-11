import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing, DashboardLayout, Register, Error } from "./pages";
import HomeLayout from "./pages/HomeLayout";
import { PrivateRoute } from "./components";
import { AddJob, AllJobs, Profile, Stats } from "./pages/Dashboard";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        element: <PrivateRoute />,
        children: [
          {
            element: <DashboardLayout />,
            children: [
              {
                index: true,
                element: <Stats />,
              },
              {
                path: "all-jobs",
                element: <AllJobs />,
              },
              {
                path: "add-job",
                element: <AddJob />,
              },
              {
                path: "profile",
                element: <Profile />,
              },
            ],
          },
        ],
      },
      {
        path: "/landing",
        element: <Landing />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
