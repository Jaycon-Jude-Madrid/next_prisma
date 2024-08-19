import { ToolTip } from "@/components/common/ToolTip";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useGetUserDataServer } from "@/hooks/get-user/useGetUserServer";
import { getAllTodos } from "@/services/todos/todos";
import { Check } from "lucide-react";
import TodoActions from "./TodoActions";

async function TodoList() {
	const session = await useGetUserDataServer();
	const userId = session?.user?.id ?? "";

	const data = await getAllTodos({
		user_id: userId,
		status: "",
	});

	const statusProgressColor: { [key: string]: string } = {
		Todo: "bg-blue-200 border-blue-500",
		"In Progress": "bg-orange-200 border-yellow-500",
		Done: "bg-green-200 border-green-500",
	};

	return (
		<div className="max-h-[80vh] overflow-auto space-y-2 p-2">
			{data?.data.length === 0 && (
				<div className="text-center">
					<p className="text-gray-700">
						Your todo list is empty. Add a new task to get started!
					</p>
				</div>
			)}
			{data?.data.map((item) => (
				<Card key={item.id}>
					<CardHeader>
						<div className="flex justify-between w-full items-center">
							<div className="flex items-center gap-2">
								<CardTitle>{item.title}</CardTitle>
								{item.status === "Done" && (
									<ToolTip title="Done">
										<Badge
											variant={"outline"}
											className={`rounded-full ${
												statusProgressColor[item.status]
											}`}
										>
											<Check className="w-4 h-4" />
										</Badge>
									</ToolTip>
								)}
							</div>

							<TodoActions status={item.status} />
						</div>
					</CardHeader>
					<CardContent>
						<CardDescription>{item.description}</CardDescription>
					</CardContent>
					<CardFooter>
						<div className="flex gap-2 items-center">
							<p className="text-sm">Updated July 24 2024</p>

							<Badge
								variant="outline"
								className={statusProgressColor[item.status]}
							>
								{item.status}
							</Badge>
						</div>
					</CardFooter>
				</Card>
			))}
		</div>
	);
}

export default TodoList;
