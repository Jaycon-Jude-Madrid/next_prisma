"use client";

import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AvatarDropdown from "./navbar/AvatarDropdown";

export default function Navbar() {
	const { data: session, status } = useSession();
	const router = useRouter();

	const loading = status === "loading";

	const handleRedirect = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		signIn();
	};

	return (
		<nav className=" bg-white shadow-sm dark:bg-gray-950/90">
			<div className="w-full max-w-7xl mx-auto px-4">
				<div className="flex justify-between h-14 items-center">
					<Link href="/" className="flex items-center" prefetch={false}>
						<MountainIcon className="h-6 w-6" />
						<span className="sr-only">Acme Inc</span>
					</Link>
					<nav className="hidden md:flex gap-4">
						<Link
							href="#"
							className="font-medium flex items-center text-sm transition-colors hover:underline"
							prefetch={false}
						>
							Home
						</Link>
						<Link
							href="#"
							className="font-medium flex items-center text-sm transition-colors hover:underline"
							prefetch={false}
						>
							About
						</Link>
						<Link
							href="#"
							className="font-medium flex items-center text-sm transition-colors hover:underline"
							prefetch={false}
						>
							Services
						</Link>
						<Link
							href="#"
							className="font-medium flex items-center text-sm transition-colors hover:underline"
							prefetch={false}
						>
							Contact
						</Link>
					</nav>
					<div className="flex items-center gap-4">
						{!session ? (
							<Button variant="outline" size="sm" onClick={handleRedirect}>
								Sign in
							</Button>
						) : (
							<AvatarDropdown />
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}

function MountainIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
		</svg>
	);
}
