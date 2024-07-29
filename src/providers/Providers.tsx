"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

interface ProvidersProps {
	children: ReactNode;
	session: Session | null;
}

const Providers: React.FC<ProvidersProps> = ({ children, session }) => {
	return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Providers;
