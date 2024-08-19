import {
	AddTodoProps,
	DeleteTodoProps,
	GetTodosProps,
	UpdateTodoProps,
} from "@/interfaces/todo";
import axiosInstance from "../interceptor";

export const addTodo = async ({ body, user_id }: AddTodoProps) => {
	try {
		const res = await axiosInstance.post(`api/todos/${user_id}`, body);
		return res.data;
	} catch (e: unknown) {
		if (e instanceof Error) {
			throw new Error(e.message);
		} else {
			throw new Error("An unknown error occurred");
		}
	}
};

export const getAllTodos = async ({
	user_id = "",
	status = "",
}: GetTodosProps) => {
	try {
		const res = await axiosInstance.get(
			`api/todos/${user_id}?status=${status}`
		);
		return res.data;
	} catch (e: unknown) {
		if (e instanceof Error) {
			throw new Error(e.message);
		} else {
			throw new Error("An unknown error occurred");
		}
	}
};

export const deleteTodo = async ({ post_id }: DeleteTodoProps) => {
	try {
		const res = await axiosInstance.delete(`api/todos/${post_id}`);
		return res.data;
	} catch (e: unknown) {
		if (e instanceof Error) {
			throw new Error(e.message);
		} else {
			throw new Error("An unknown error occurred");
		}
	}
};

export const updateTodo = async ({ body, post_id }: UpdateTodoProps) => {
	try {
		const res = await axiosInstance.put(`api/todos/${post_id}`, body);
		return res.data;
	} catch (e: unknown) {
		if (e instanceof Error) {
			throw new Error(e.message);
		} else {
			throw new Error("An unknown error occurred");
		}
	}
};

export const getSpecificTodo = async ({ post_id }: DeleteTodoProps) => {
	try {
		const res = await axiosInstance.get(`api/todos/${post_id}`);
		return res.data;
	} catch (e: unknown) {
		if (e instanceof Error) {
			throw new Error(e.message);
		} else {
			throw new Error("An unknown error occurred");
		}
	}
};
