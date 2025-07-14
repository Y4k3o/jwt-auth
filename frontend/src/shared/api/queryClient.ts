import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { ApiError } from "../types/api.types";

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 1,
		},
		mutations: {
			retry: 1,
		},
	},
	queryCache: new QueryCache({
		onError: (error: unknown) => {
			const apiError = error as ApiError;

			if (!navigator.onLine) {
				toast.error("No internet connection");
			} else if (apiError.error) {
				toast.error(apiError.error);
			} else {
				toast.error("An unknown error occurred");
			}
		},
	}),
	mutationCache: new MutationCache({
		onError: (error: unknown) => {
			const apiError = error as ApiError;

			if (!navigator.onLine) {
				toast.error("No internet connection");
			} else if (apiError.error) {
				toast.error(apiError.error);
			} else {
				toast.error("An unknown error occurred");
			}
		},
	}),
});
