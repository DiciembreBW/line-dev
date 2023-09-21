import WorkspaceNav from "@/components/app/Navbar/WorkspaceNav";
import React from "react";

type Props = {};

export default function WorkspacePage({}: Props) {
	return (
		<div className="h-screen flex flex-col">
			<WorkspaceNav />
		</div>
	);
}
