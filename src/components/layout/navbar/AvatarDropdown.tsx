"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AvatarDropdown = () => {
	const router = useRouter();
	const { data } = useSession();
	const { user } = data as { user: { image: string; email: string } };

	const handleSignout = (e: any) => {
		e.preventDefault();
		signOut();
		router.push("/");
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar
					className="h-9 w-9 lg:h-10 lg:w-10
					"
				>
					<AvatarImage src={user?.image} alt="@shadcn" />
					<AvatarFallback>{}</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="max-w-3xl overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-950">
				<DropdownMenuLabel className="px-2 py-2">
					<p className="text-sm font-semibold"> {user.name}</p>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />

				<DropdownMenuSeparator />
				<DropdownMenuItem
					onClick={handleSignout}
					className="flex cursor-pointer items-center gap-2 px-2 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 text-red-500"
				>
					Logout
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default AvatarDropdown;
