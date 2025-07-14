import { ROUTES } from "@/app/routes/routes";
import { TokenTimer } from "@/components/TokenTimer";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/shared/hooks/useLogout";
import { useUserInfo } from "@/shared/hooks/useUserInfo";
import { Navigate } from "react-router";

const Profile = () => {
	const { data: user, error, isPending } = useUserInfo();
	const { mutate } = useLogout();

	if (isPending) {
		return <div className=" text-3xl text-center uppercase">Loading</div>;
	}

	if (error) {
		return <Navigate to={ROUTES.SIGN_IN}></Navigate>;
	}

	return (
		<div className="w-full mx-auto max-w-sm flex flex-col gap-5 px-10 py-5 border rounded-4xl shadow-md bg-muted">
			<div className="flex flex-col gap-4 justify-center items-start">
				<div className="text-xl">
					ID: <span className="font-bold">{user?.id}</span>
				</div>
				<div className="text-xl flex flex-col">
					<div>
						Name: <span className="font-bold">{user?.name}</span>
					</div>
					<div>
						UserName: <span className="font-bold">{user?.username}</span>
					</div>
				</div>
				<TokenTimer />
				<Button className="w-full" onClick={() => mutate()}>
					Logout
				</Button>
			</div>
		</div>
	);
};

export default Profile;
