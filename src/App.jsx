import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import LandingPage from "./pages/Landing";
import Onboarding from "./pages/Onboarding";
import JobListing from "./pages/JobListing";
import MyJobs from "./pages/MyJobs";
import PostJobs from "./pages/PostJobs";
import Job from "./pages/Job";
import SavedJobs from "./pages/SavedJobs";
import { ThemeProvider } from "./components/theme-provider";
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
        element: <JobListing />,
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
        path: "/savedjob",
        element: <SavedJobs />,
      },
    ],
  },
]);
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
