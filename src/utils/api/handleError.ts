import { NextResponse } from "next/server";

// Utility function to handle errors
export function handleError(error: unknown) {
	let errorMessage = "An unknown error occurred";
	if (error instanceof Error) {
		errorMessage = error.message;
	}
	console.error("Error processing request:", errorMessage);
	return NextResponse.json(
		{
			message: "Error processing request",
			error: errorMessage,
		},
		{ status: 500 }
	);
}
