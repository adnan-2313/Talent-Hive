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
import Protectedroutes from "./components/Protectedroutes";
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
        element: (
          <Protectedroutes>
            <Onboarding />
          </Protectedroutes>
        ),
      },
      {
        path: "/jobs",
        element: (
          <Protectedroutes>
            <JobListing />
          </Protectedroutes>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <Protectedroutes>
            <Job />
          </Protectedroutes>
        ),
      },
      {
        path: "/myjobs",
        element: (
          <Protectedroutes>
            <MyJobs />
          </Protectedroutes>
        ),
      },
      {
        path: "/postjob",
        element: (
          <Protectedroutes>
            <PostJobs />
          </Protectedroutes>
        ),
      },
      {
        path: "/savedjob",
        element: (
          <Protectedroutes>
            <SavedJobs />
          </Protectedroutes>
        ),
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
