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
import Faq from "./pages/Faq";
import SignupOption from "./pages/SignupOption";
import Signup from "./pages/Signup";
import Career from "./pages/Career";
import JobifyProvider from "./components/context/JobifyProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<Faq />} />
        <Route path="career" element={<Career />} />
        <Route path="signUpOption" element={<SignupOption />} />
      </Route>
      <Route path="signUpOption/:signType" element={<Signup />} />
      <Route path="login" element={<Login />} />
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
