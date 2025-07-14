import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
	accessToken: string | null;
	refreshToken: string | null;
	accessTokenTTL: string | null;
	refreshTokenTTL: string | null;
	isAuthenticated: boolean;
	setTokens: (accessToken: string, accessTokenTTL: string, refreshToken: string, refreshTokenTTL: string) => void;
	clear: () => void;
};

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			accessToken: null,
			refreshToken: null,
			accessTokenTTL: null,
			refreshTokenTTL: null,

			isAuthenticated: false,
			setTokens: (accessToken, accessTokenTTL, refreshToken, refreshTokenTTL) =>
				set({ accessToken, accessTokenTTL, refreshToken, refreshTokenTTL, isAuthenticated: true }),
			clear: () => set({ accessToken: null, accessTokenTTL: null, refreshToken: null, refreshTokenTTL: null, isAuthenticated: false }),
		}),
		{
			name: "auth",
		}
	)
);
