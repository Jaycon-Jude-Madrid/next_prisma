import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode } from "react";

export function ToolTip({
	children,
	title,
}: {
	children: ReactNode;
	title: string;
}) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent>
					<p>{title}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
