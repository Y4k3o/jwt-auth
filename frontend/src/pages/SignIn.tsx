import { ROUTES } from "@/app/routes/routes";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSignIn } from "@/shared/hooks/useSignIn";
import type { SignInFormData } from "@/shared/types/form.types";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router";

const SignIn = () => {
	const { register, handleSubmit } = useForm<SignInFormData>();
	const { mutate, isPending } = useSignIn();

	const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
		mutate(data);
	};

	return (
		<Card className="w-full max-w-sm mx-auto">
			<CardHeader>
				<CardTitle>Login to your account</CardTitle>

				<CardAction>
					<Link to={ROUTES.SIGN_UP}>
						<Button variant="link">Sign Up</Button>
					</Link>
				</CardAction>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col gap-6">
						<div className="grid gap-2">
							<Label htmlFor="username">Username</Label>
							<Input {...register("username")} id="username" type="text" placeholder="Pudge" required />
						</div>
						<div className="grid gap-2">
							<Label htmlFor="password">Password</Label>
							<Input {...register("password")} id="password" type="password" placeholder="*****" required />
						</div>
					</div>
					<Button disabled={isPending} type="submit" className="w-full mt-5">
						Login
					</Button>
				</form>
			</CardContent>
		</Card>
	);
};

export default SignIn;
