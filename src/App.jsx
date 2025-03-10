import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import Rootlayout from "./Layout/Rootlayout";
import About from "./pages/About";
import SignupOption from "./pages/SignupOption";
import Signup from "./pages/Signup";
import Career from "./pages/Career";
import JobifyProvider from "./components/context/JobifyProvider";
import OTPInput from "./pages/Emailverification";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="career" element={<Career />} />
        <Route path="signUpOption" element={<SignupOption />} />
      </Route>
      <Route
        path="signUpOption/:signupMode"
        element={
          <JobifyProvider>
            <Signup />
          </JobifyProvider>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="/email" element={<OTPInput />} />
    </Route>
  )
);
export default function App() {
  return (
    <JobifyProvider>
      <RouterProvider router={router} />
    </JobifyProvider>
  );
}
