import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";

function TodoAddTaskModal() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="flex gap-2" size="sm">
					Add task
					<Plus className="w-4 h-4" />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[525px] lg:min-w-[40rem] w-full">
				<DialogHeader>
					<DialogTitle>Task</DialogTitle>
					<DialogDescription>
						Add a new task to your todo list
					</DialogDescription>
				</DialogHeader>
				<form className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Task Title
						</Label>
						<Input
							id="name"
							placeholder="Learn new technology."
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="description" className="text-right">
							Description
						</Label>
						<Textarea
							id="description"
							className="col-span-3"
							placeholder="This is a description of the task."
							maxLength={150}
						/>
					</div>
					<DialogFooter>
						<Button type="submit" size="sm">
							Add task
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}

export default TodoAddTaskModal;
