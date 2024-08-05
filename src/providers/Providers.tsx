"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

interface ProvidersProps {
	children: ReactNode;
	session: Session | null;
}

const Providers: React.FC<ProvidersProps> = ({ children, session }) => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<SessionProvider session={session}>{children}</SessionProvider>
		</QueryClientProvider>
	);
};

export default Providers;
