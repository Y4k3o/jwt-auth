export const formatTime = (ms: number) => {
	if (ms <= 0) return "Expired";

	const getZero = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

	const seconds = getZero(Math.floor((ms / 1000) % 60));
	const minutes = getZero(Math.floor((ms / (1000 * 60)) % 60));
	const hours = getZero(Math.floor((ms / (1000 * 60 * 60)) % 24));
	const days = Math.floor(ms / (1000 * 60 * 60 * 24));

	return `${days}d ${hours}:${minutes}:${seconds}`;
};
