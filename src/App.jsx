import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import LandingPage from "./pages/Landing";
import Onboarding from "./pages/Onboarding";
import Joblisting from "./pages/JobListing";
import MyJobs from "./pages/MyJobs";
import PostJobs from "./pages/PostJobs";
import Job from "./pages/Job";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <Onboarding />,
      },
      {
        path: "/jobs",
        element: <Joblisting />,
      },
      {
        path: "/job/:id",
        element: <Job />,
      },
      {
        path: "/myjobs",
        element: <MyJobs />,
      },
      {
        path: "/postjob",
        element: <PostJobs />,
      },
      {
        path: "/postjob",
        element: <PostJobs />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
