import { useAuthStore } from "@/store/authStore";
import { Navigate, Outlet } from "react-router";

export const ProtectedRoute = () => {
	const { isAuthenticated } = useAuthStore();

	if (!isAuthenticated) {
		return <Navigate to="/signin" replace />;
	}

	return <Outlet />;
};
