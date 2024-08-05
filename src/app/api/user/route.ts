import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server"; // Ensure you have the correct import for NextResponse

export async function GET(
	response: NextResponse,
	request: NextRequest,
	context: unknown
) {
	try {
		const allUsers = await db.user.findMany();
		return NextResponse.json({
			message: "GET /api/user",
			data: allUsers,
		});
	} catch (error: unknown) {
		let errorMessage = "An unknown error occurred";

		if (error instanceof Error) {
			errorMessage = error.message;
		}

		return NextResponse.json(
			{
				message: "Error fetching users",
				error: errorMessage,
			},
			{ status: 500 }
		);
	}
}
