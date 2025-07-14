export type ApiError = {
	error: string;
};

export type ApiSuccess = {
	success: string;
};

export type UserDto = {
	id: number;
	name: string;
	username: string;
};

export type RenewTokenDto = {
	accessToken: string;
	accessTokenTTL: string;
	refreshToken: string;
	refreshTokenTTL: string;
};

export type RefreshToken = {
	refreshToken: string;
};

export type SignInResponse = {
	accessToken: string;
	accessTokenTTL: string;
	refreshToken: string;
	refreshTokenTTL: string;
	sessionID: string;
	user: {
		id: 0;
		name: string;
		username: string;
	};
};
