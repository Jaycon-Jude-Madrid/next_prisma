import { Button } from "@/components/ui/button";
import LoginButton from "@/components/ui/login-button";
import { useGetUserDataServer } from "@/hooks/get-user/useGetUserServer";
import clsx from "clsx";
import { redirect } from "next/navigation";

export default async function Home() {
	const Session = await useGetUserDataServer();

	if (Session) {
		redirect("/home");
	}
	return (
		<main className="flex h-screen flex-col items-center justify-center">
			<div className="space-y-6 text-center">
				<h1
					className={clsx("text-6xl font-semibold text-black drop-shadow-md")}
				>
					Hey there! Welcome 👋
				</h1>

				<div>
					<LoginButton>
						<Button>Signin</Button>
					</LoginButton>
				</div>
			</div>
		</main>
	);
}
