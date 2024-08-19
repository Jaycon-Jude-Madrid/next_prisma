"use server";
import { options } from "@/lib/auth";
import { getServerSession } from "next-auth";

export const sessionStatus = async () => {
	const session = await getServerSession(options);
	console.log(session);
	if (session) {
		return true;
	}
	return false;
};
