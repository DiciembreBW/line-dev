import SearchItem from "@/components/app/Action/SearchItem";
import WorkspaceNav from "@/components/app/Navbar/WorkspaceNav";
import React from "react";

type Props = {};

export default function WorkspacePage({}: Props) {
	return (
		<div className="h-screen flex flex-col">
			{/* <div className="ring">a</div> */}
			<WorkspaceNav />
			<div className="basis-full grid content-center justify-items-center">
				<SearchItem />
			</div>
		</div>
	);
}
