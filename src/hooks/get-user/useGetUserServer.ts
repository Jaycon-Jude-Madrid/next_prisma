import { options } from "@/lib/auth";
import { getServerSession, Session } from "next-auth";

export const useGetUserDataServer = async (): Promise<Session | null> => {
	try {
		const user = await getServerSession(options);
		return user;
	} catch (error: unknown) {
		console.error("Error fetching user session:", error);
		return null;
	}
};
