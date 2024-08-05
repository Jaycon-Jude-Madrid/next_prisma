import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

function TodoStatusSelect({ status }: { status: string }) {
	const statusSelect = ["Todo", "In Progress", "Done"];
	return (
		<Select value={status}>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select a Status" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Status</SelectLabel>
					{statusSelect.map((item) => (
						<SelectItem value={`${item}`} key={item}>
							{item}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}

export default TodoStatusSelect;
