import { ROUTES } from "@/app/routes/routes";
import { useAuthStore } from "@/store/authStore";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import type { ApiError, SignInResponse } from "../types/api.types";
import type { SignInFormData } from "../types/form.types";

export const useSignIn = () => {
	const navigate = useNavigate();
	const { setTokens } = useAuthStore();

	return useMutation<SignInResponse, ApiError, SignInFormData>({
		mutationFn: async (data) => {
			const res = await fetch("http://localhost:8000/auth/signin", {
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
		onSuccess: ({ accessToken, accessTokenTTL, refreshToken, refreshTokenTTL, user }) => {
			setTokens(accessToken, accessTokenTTL, refreshToken, refreshTokenTTL);
			navigate(ROUTES.PROFILE);
			toast.success(`Hello ${user.name}`);
		},
	});
};
