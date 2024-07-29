import { useGetUserDataServer } from "@/hooks/get-user/useGetUserServer";
import { redirect } from "next/navigation";

export default async function Home() {
	const data = await useGetUserDataServer();

	if (!data?.user) {
		redirect("/auth/signin");
	}

	return (
		<main>
			<div>{JSON.stringify(data?.user)}</div>
		</main>
	);
}
