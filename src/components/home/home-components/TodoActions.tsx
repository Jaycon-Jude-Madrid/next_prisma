import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import TodoStatusSelect from "./TodoStatusSelect";

const TodoActions = ({ status }: { status: string }) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="h-8 w-8 p-0">
					<span className="sr-only">Open menu</span>
					<DotsHorizontalIcon className="h-4 w-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel>Actions</DropdownMenuLabel>

				<DropdownMenuItem>
					<TodoStatusSelect status={status} />
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>View </DropdownMenuItem>
				<DropdownMenuItem className="text-red-500">Remove</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default TodoActions;
