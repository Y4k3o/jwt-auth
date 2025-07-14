import { useQuery } from "@tanstack/react-query";
import type { ApiError, UserDto } from "../types/api.types";
import { fetchWithAuth } from "../utils/fetchWithAuth";

export const useUserInfo = () => {
	return useQuery<UserDto, ApiError>({
		queryKey: ["user"],
		queryFn: async () => fetchWithAuth("http://localhost:8000/api/user"),
	});
};
