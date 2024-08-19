"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChromeIcon, LucideGithub } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Container } from "../ui/container";

export default function Signin() {
	const { data } = useSession();

	const handleLoginGithub = () => {
		signIn("github", {
			callbackUrl: `${window.location.origin}/home`,
		});
	};

	const handleLoginGoogle = () => {
		signIn("google", {
			callbackUrl: `${window.location.origin}/home`,
		});
	};

	if (data?.user) {
		redirect("/");
	}
	return (
		<Container>
			<div className="py-20">
				<Card className="flex min-h-[50dvh] items-center justify-center bg-background px-4 py-12  sm:px-6 lg:px-8 ">
					<div className="mx-auto w-full max-w-md space-y-8">
						<div>
							<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
								Sign in to your account
							</h2>
						</div>
						<div className="space-y-4">
							<Button
								variant="outline"
								className="w-full"
								onClick={handleLoginGoogle}
							>
								<ChromeIcon className="mr-2 h-4 w-4" />
								Sign in with Google
							</Button>
							<Button
								variant="outline"
								className="w-full"
								onClick={handleLoginGithub}
							>
								<LucideGithub className="mr-2 h-4 w-4" />
								Sign in with GitHub
							</Button>
						</div>
					</div>
				</Card>
			</div>
		</Container>
	);
}
