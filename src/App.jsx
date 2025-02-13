import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Rootlayout from "./Layout/Rootlayout";
import About from "./pages/About";
import Faq from "./pages/Faq";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<Rootlayout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="help" element={<Faq />} />
			</Route>
			<Route path="login" element={<Login />} />
			<Route path="signup" element={<Signup />} />
		</Route>
	)
);
export default function App() {
	return <RouterProvider router={router} />;
}
