import { useAuthStore } from "@/store/authStore";
import { Navigate, Outlet } from "react-router";

export const PublicRoute = () => {
	const { isAuthenticated } = useAuthStore();

	if (isAuthenticated) {
		return <Navigate to="/profile" replace />;
	}

	return <Outlet />;
};
