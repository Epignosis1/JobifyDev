import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Rootlayout from "./Layout/Rootlayout";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Career from "./pages/Career";
import JobifyProvider from "./components/context/JobifyProvider";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ui/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import Forget from "./pages/Forget";
import Reset from "./pages/Reset";
import Authlayout from "./Layout/Authlayout";
import Joblist from "./pages/Joblist";
import Applayout from "./Layout/Applayout";
import JobDetails from "./pages/JobDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="career" element={<Career />} />
      </Route>
      <Route element={<Authlayout />}>
        <Route path="signUp" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/resetPassword" element={<Reset />} />
      </Route>
      <Route element={<Applayout />}>
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="joblist" element={<Joblist />} />
        <Route path="joblist/:id" element={<JobDetails />} />
      </Route>
    </Route>
  )
);
export default function App() {
  return (
    <>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
          },
        }}
      />
      <JobifyProvider>
        <RouterProvider router={router} />
      </JobifyProvider>
    </>
  );
}
