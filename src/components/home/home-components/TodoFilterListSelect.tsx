"use client";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useUpdateUrlParams from "@/hooks/params/useUpdateUrlParams";
import { Filter } from "lucide-react";
import { useSearchParams } from "next/navigation";
import * as React from "react";

function TodoFilterListSelect() {
	const search = useSearchParams();
	const { UpdateUrlParams } = useUpdateUrlParams();
	const statusOptions = ["All", "Todo", "In Progress", "Done"];
	const sortOrderOptions = ["Ascending", "Descending"];

	const [status, setStatus] = React.useState(search.get("status") || "All");
	const [sortOrder, setSortOrder] = React.useState(
		search.get("sortOrder") || "Descending"
	);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size={"icon"}>
					<Filter className="w-4 h-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-full">
				<DropdownMenuLabel>Status</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup
					value={status}
					onValueChange={(value) => {
						setStatus(value);
						UpdateUrlParams("status", value);
					}}
				>
					{statusOptions.map((item) => (
						<DropdownMenuRadioItem value={item} key={item}>
							{item}
						</DropdownMenuRadioItem>
					))}
				</DropdownMenuRadioGroup>

				<DropdownMenuLabel>Sort Order</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup
					value={sortOrder}
					onValueChange={(value) => {
						setSortOrder(value);
						UpdateUrlParams("sortOrder", value);
					}}
				>
					{sortOrderOptions.map((item) => (
						<DropdownMenuRadioItem value={item} key={item}>
							{item}
						</DropdownMenuRadioItem>
					))}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default TodoFilterListSelect;
