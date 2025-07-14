import { useAuthStore } from "@/store/authStore";
import type { ApiError, RenewTokenDto } from "../types/api.types";

export const fetchWithAuth = async <T = unknown>(url: string, options: RequestInit = {}): Promise<T> => {
	const { accessToken, refreshToken, setTokens, clear } = useAuthStore.getState();

	const res = await fetch(url, {
		...options,
		headers: {
			...(options.headers || {}),
			"Content-Type": "application/json",
			Authorization: `Bearer ${accessToken}`,
		},
	});

	if (res.status !== 401 && !res.ok) {
		const { error }: ApiError = await res.json();
		throw error;
	}

	if (res.status !== 401 && res.ok) {
		return res.json();
	}

	if (res.status === 401 && refreshToken) {
		const refreshResponse = await fetch("http://localhost:8000/auth/tokens/renew", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify({ refreshToken }),
		});

		if (!refreshResponse.ok) {
			clear();
			const { error }: ApiError = await refreshResponse.json();
			throw error;
		}

		const renew: RenewTokenDto = await refreshResponse.json();
		setTokens(renew.accessToken, renew.accessTokenTTL, renew.refreshToken, renew.refreshTokenTTL);

		const retry = await fetch(url, {
			...options,
			headers: {
				...(options.headers || {}),
				"Content-Type": "application/json",
				Authorization: `Bearer ${renew.accessToken}`,
			},
		});

		if (!retry.ok) {
			const { error }: ApiError = await retry.json();
			throw error;
		}

		return retry.json();
	}
	const error: ApiError = await res.json();
	throw error;
};
