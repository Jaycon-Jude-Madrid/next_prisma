import { db } from "@/lib/db";
import { handleError } from "@/utils/api/handleError";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
	request: NextRequest,
	context: { params: { id: any } }
) {
	try {
		const user_id = context.params.id;
		const { searchParams } = new URL(request.url);
		const status = searchParams.get("status");

		if (!user_id) {
			return NextResponse.json(
				{
					message: "userId is required",
				},
				{ status: 400 }
			);
		}

		const query: any = {
			where: {
				userId: user_id,
			},
			orderBy: {
				createdAt: "desc",
			},
		};

		if (status) {
			query.where.status = status;
		}

		const usersPost = await db.todos.findMany(query);

		if (!usersPost || usersPost.length === 0) {
			return NextResponse.json({
				message: "No data found for the given user_id",

				data: usersPost,
			});
		}

		return NextResponse.json({
			message: "Success",
			data: usersPost,
		});
	} catch (error: unknown) {
		return handleError(error);
	}
}
export async function POST(
	request: NextRequest,
	context: { params: { id: string | number } }
) {
	try {
		const user_id = context.params.id;

		const body = await request.json();

		if (!body.title || !user_id) {
			return NextResponse.json(
				{
					message: "title and user_id are required",
				},
				{ status: 400 }
			);
		}

		const addPost = await db.todos.create({
			data: {
				...body,
				userId: user_id,
			},
		});

		return NextResponse.json({
			message: "Success",
			data: addPost,
		});
	} catch (error: unknown) {
		return handleError(error);
	}
}

export async function DELETE(
	request: NextRequest,
	context: { params: { id: string | number } }
) {
	try {
		const post_id: string = String(context.params.id);

		if (!post_id) {
			return NextResponse.json(
				{
					message: "post_id is required",
				},
				{ status: 400 }
			);
		}

		// Check if the post exists
		const existingPost = await db.todos.findUnique({
			where: { id: post_id },
		});

		if (!existingPost) {
			return NextResponse.json(
				{
					message: "No post found to delete",
				},
				{ status: 404 }
			);
		}

		// Delete the post
		const deletedPost = await db.todos.delete({
			where: { id: post_id },
		});

		return NextResponse.json({
			message: "Post deleted",
			deletedPost,
		});
	} catch (error: unknown) {
		return handleError(error);
	}
}

export async function PUT(
	request: NextRequest,
	context: { params: { id: string | number } }
) {
	try {
		const post_id: string = String(context.params.id);

		const body = await request.json();

		if (!body.title || !post_id) {
			return NextResponse.json(
				{
					message: "title and post_id are required",
				},
				{ status: 400 }
			);
		}

		// Check if the post exists
		const existingPost = await db.todos.findUnique({
			where: { id: post_id },
		});

		if (!existingPost) {
			return NextResponse.json(
				{
					message: "No post found to update",
				},
				{ status: 404 }
			);
		}

		// Update the post
		const updatedPost = await db.todos.update({
			where: { id: post_id },
			data: body,
		});

		return NextResponse.json({
			message: "Post updated",
			updatedPost,
		});
	} catch (error: unknown) {
		return handleError(error);
	}
}
