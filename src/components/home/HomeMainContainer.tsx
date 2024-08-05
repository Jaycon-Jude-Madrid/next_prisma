import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import TodoAddTaskModal from "./home-components/TodoAddTaskModal";
import TodoFilterListSelect from "./home-components/TodoFilterListSelect";
import TodoList from "./home-components/TodoList";

function HomeMainContainer() {
	return (
		<Card>
			<CardHeader>
				<div className="flex justify-between">
					<div>
						<CardTitle>Your todos.</CardTitle>
						<CardDescription>Manage your tasks effortlessly.</CardDescription>
					</div>

					<div className="flex items-center gap-2">
						<TodoFilterListSelect />
						<TodoAddTaskModal />
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<TodoList />
			</CardContent>
		</Card>
	);
}

export default HomeMainContainer;
