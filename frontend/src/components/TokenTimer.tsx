import { formatTime } from "@/shared/utils/formatTime";
import { useAuthStore } from "@/store/authStore";
import { useEffect, useState } from "react";

type StateType = {
	access: string;
	refresh: string;
};

export const TokenTimer = () => {
	const { accessTokenTTL, refreshTokenTTL } = useAuthStore();

	const [timeLeft, setTimeLeft] = useState<StateType>({
		access: "",
		refresh: "",
	});

	useEffect(() => {
		if (!accessTokenTTL || !refreshTokenTTL) return;

		const updateTimer = () => {
			const now = new Date();

			const accessEnd = new Date(accessTokenTTL);
			const accessDiff = accessEnd.getTime() - now.getTime();

			const refreshEnd = new Date(refreshTokenTTL);
			const refreshDiff = refreshEnd.getTime() - now.getTime();

			setTimeLeft({
				access: formatTime(accessDiff),
				refresh: formatTime(refreshDiff),
			});
		};

		updateTimer();
		const interval = setInterval(updateTimer, 1000);

		return () => clearInterval(interval);
	}, [accessTokenTTL, refreshTokenTTL]);

	return (
		<>
			<div className="flex flex-col items-start">
				<div className="text-lg">
					AccessTTL: <span className="font-bold">{timeLeft.access}</span>
				</div>
				<div className="text-lg">
					RefreshTTL: <span className="font-bold">{timeLeft.refresh}</span>{" "}
				</div>
			</div>
		</>
	);
};
