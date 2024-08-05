interface AddTodoProps {
	body: {
		title: string;
		description?: string;
	};
	user_id: string;
}

interface GetTodosProps {
	user_id: string;
	status?: string;
}

interface DeleteTodoProps {
	post_id: string;
}

interface UpdateTodoProps {
	body: {
		title?: string;
		description?: string;
	};
	post_id: string;
}

export type { AddTodoProps, DeleteTodoProps, GetTodosProps, UpdateTodoProps };
