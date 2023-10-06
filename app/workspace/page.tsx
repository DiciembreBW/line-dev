import WorkspaceNav from "@/components/app/Navbar/WorkspaceNav";
import React from "react";

type Props = {};

export default function WorkspacePage({}: Props) {
	return (
		<div className="h-screen flex flex-col">
			<WorkspaceNav />

			<div className="h-full flex justify-center items-center text-3xl font-bold">
				Snap
			</div>
		</div>
	);
}
