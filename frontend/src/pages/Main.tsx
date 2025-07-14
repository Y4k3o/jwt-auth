import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";
import { Link, Navigate } from "react-router";

const Main = () => {
	const { isAuthenticated } = useAuthStore();

	return (
		<div className="w-full mx-auto max-w-sm flex flex-col gap-5 border shadow-md rounded-3xl p-10">
			{isAuthenticated ? (
				<Navigate to={"/profile"} />
			) : (
				<>
					<Link to="/signup">
						<Button className="w-full">SignUp</Button>
					</Link>
					<Link to="/signin">
						<Button className="w-full">SignIn</Button>
					</Link>
				</>
			)}
		</div>
	);
};

export default Main;
