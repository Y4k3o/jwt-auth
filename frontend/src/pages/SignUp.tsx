import { ROUTES } from "@/app/routes/routes";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSignUp } from "@/shared/hooks/useSignUp";
import type { SignUpFormData } from "@/shared/types/form.types";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router";

const SignUp = () => {
	const { register, handleSubmit } = useForm<SignUpFormData>();
	const { mutate, isPending } = useSignUp();

	const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
		mutate(data);
	};

	return (
		<Card className="w-full max-w-sm mx-auto">
			<CardHeader>
				<CardTitle>Create account</CardTitle>
				<CardAction>
					<Link to={ROUTES.SIGN_IN}>
						<Button variant="link">Sign In</Button>
					</Link>
				</CardAction>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col gap-6">
						<div className="grid gap-2">
							<Label htmlFor="name">Name</Label>
							<Input {...register("name")} id="name" type="text" placeholder="John" required />
						</div>
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
						Create Account
					</Button>
				</form>
			</CardContent>
		</Card>
	);
};

export default SignUp;
