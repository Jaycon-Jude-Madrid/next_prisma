import Navbar from "@/components/layout/Navbar";
import { useGetUserDataServer } from "@/hooks/get-user/useGetUserServer";
import clsx from "clsx";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { redirect } from "next/navigation";

const inter = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Home",
	description: "Home page of the app",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const Session = await useGetUserDataServer();

	if (!Session) {
		redirect("/auth/signin");
	}

	return (
		<html lang="en">
			<body className={clsx(inter.className)}>
				{/* <Container> */}
				<Navbar />

				<main>{children}</main>
				{/* </Container> */}
			</body>
		</html>
	);
}
