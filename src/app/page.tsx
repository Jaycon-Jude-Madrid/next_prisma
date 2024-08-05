import HomeMainContainer from "@/components/home/HomeMainContainer";
import { useGetUserDataServer } from "@/hooks/get-user/useGetUserServer";
import { redirect } from "next/navigation";

export default async function Home() {
	const data = await useGetUserDataServer();

	if (!data) {
		redirect("auth/signin");
	}
	return (
		<main className="py-10 h-full">
			<HomeMainContainer />
		</main>
	);
}
