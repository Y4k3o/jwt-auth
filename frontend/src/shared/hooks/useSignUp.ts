import { ROUTES } from "@/app/routes/routes";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import type { ApiError, ApiSuccess } from "../types/api.types";
import type { SignUpFormData } from "../types/form.types";

export const useSignUp = () => {
	const navigate = useNavigate();

	return useMutation<ApiSuccess, ApiError, SignUpFormData>({
		mutationFn: async (data) => {
			const res = await fetch("http://localhost:8000/auth/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (!res.ok) {
				const error: ApiError = await res.json();
				throw error;
			}

			return res.json();
		},
		onSuccess: ({ success }) => {
			navigate(ROUTES.SIGN_IN);
			toast.success(success);
		},
	});
};
