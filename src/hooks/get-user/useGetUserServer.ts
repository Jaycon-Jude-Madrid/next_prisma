import { options } from "@/lib/auth";
import { getServerSession, Session as NextAuthSession } from "next-auth";

interface User {
	id: string;
	name: string;
	email: string;
	emailVerified: Date | null;
	image: string;
	createdAt: Date;
	updatedAt: Date;
}

interface Session extends NextAuthSession {
	user: User;
}

export const useGetUserDataServer = async (): Promise<Session | null> => {
	try {
		const session = (await getServerSession(options)) as Session;
		if (!session || !session.user) {
			return null;
		}
		return session;
	} catch (error: unknown) {
		console.error("Error fetching user session:", error);
		return null;
	}
};
