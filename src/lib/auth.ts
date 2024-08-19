import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client/extension";
import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import db from "./db";
export const options = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	adapter: PrismaAdapter(
		db as unknown as PrismaClient
	) as import("c:/Users/User/Desktop/Web Dev/nextjs-auth-prisma/node_modules/next-auth/adapters").Adapter,
	session: {
		strategy: "database",
		maxAge: 30 * 24 * 60 * 60,
	},
	pages: {
		signIn: "/auth/signin",

		verifyRequest: "/auth/verify-request",
	},
	callbacks: {
		async session({ session, user }) {
			session.user = user;
			return session;
		},
	},
	events: {
		async signIn({ user, isNewUser }) {
			// console.log({ user }, "signed in");
		},
	},
} satisfies AuthOptions;
