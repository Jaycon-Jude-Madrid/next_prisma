"use client";

import { useRouter } from "next/navigation";
import React from "react";

type LoginButtonProps = {
	children: React.ReactNode;
	asChild?: boolean;
	mode?: "modal" | "redirect";
};
const LoginButton = ({ children, asChild, mode }: LoginButtonProps) => {
	const router = useRouter();
	const onClick = () => {
		router.push("/auth/signin");
	};
	if (mode === "modal") {
		return (
			<div>
				<p>Modal</p>
			</div>
		);
	}
	return <span onClick={onClick}>{children}</span>;
};

export default LoginButton;
