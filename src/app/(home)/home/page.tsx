import HomeMainContainer from "@/components/home/HomeMainContainer";
import { Container } from "@/components/ui/container";

export default async function Home() {
	return (
		<Container>
			<main className="py-10 h-full">
				<HomeMainContainer />
			</main>
		</Container>
	);
}
