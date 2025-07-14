import { ProtectedRoute } from "@/app/routes/ProtectedRoute";
import Main from "@/pages/Main";
import Profile from "@/pages/Profile";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import { Navigate, Route, Routes } from "react-router";
import { PublicRoute } from "./routes/PublicRoute";
import { ROUTES } from "./routes/routes";

const App = () => {
	return (
		<div className="h-screen pt-60">
			<Routes>
				<Route element={<ProtectedRoute />}>
					<Route path={ROUTES.PROFILE} element={<Profile />} />
				</Route>
				<Route element={<PublicRoute />}>
					<Route path={ROUTES.MAIN} element={<Main />} />
					<Route path={ROUTES.SIGN_IN} element={<SignIn />} />
					<Route path={ROUTES.SIGN_UP} element={<SignUp />} />
				</Route>
				<Route path="*" element={<Navigate to={ROUTES.MAIN} />} />
			</Routes>
		</div>
	);
};

export default App;
