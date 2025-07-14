import { ROUTES } from "@/app/routes/routes";
import { useAuthStore } from "@/store/authStore";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import type { ApiError, ApiSuccess } from "../types/api.types";
import { fetchWithAuth } from "../utils/fetchWithAuth";

export const useLogout = () => {
	const navigate = useNavigate();
	const { clear } = useAuthStore();

	return useMutation<ApiSuccess, ApiError>({
		mutationFn: async () => fetchWithAuth("http://localhost:8000/auth/logout", { method: "POST" }),
		onSuccess: ({ success }) => {
			clear();
			navigate(ROUTES.MAIN);
			toast.success(success);
		},
	});
};
