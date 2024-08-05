import db from "@/lib/db";
import { handleError } from "@/utils/api/handleError";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url);
		const post_id = searchParams.get("post_id");

		if (!post_id) {
			return NextResponse.json(
				{
					message: "post_id is required",
				},
				{ status: 400 }
			);
		}

		const post = await db.todos.findUnique({
			where: {
				id: post_id,
			},
		});

		if (!post) {
			return NextResponse.json(
				{
					message: "No data found for the given post",
				},
				{ status: 404 }
			);
		}

		return NextResponse.json({
			message: "Success",
			data: post,
		});
	} catch (error: unknown) {
		return handleError(error);
	}
}
