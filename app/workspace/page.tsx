import SearchItem from "@/components/app/Action/SearchItem";
import WorkspaceNav from "@/components/app/Navbar/WorkspaceNav";
import Items from "@/components/app/ui/Items";
import UserUI from "@/components/global/ui/UserUI";
import React from "react";

type Props = {};

export default function WorkspacePage({}: Props) {
	return (
		<div className="h-screen flex flex-col">
			{/* <div className="ring">a</div> */}
			<WorkspaceNav />
			{/* <div className="basis-full grid content-center justify-items-center">
				<SearchItem />
				Smoky Runing
			</div> */}
			{/* <div className="px-3 py-2">
				<Items id="" />
			</div> */}
		</div>
	);
}
