import WorkspaceNav from "@/components/app/Navbar/WorkspaceNav";
import Preview from "@/components/app/Preview";
import PreviewJSON from "@/components/app/PreviewJSON";
import AppProvider from "@/context/app/AppProvider";
import {Dialog} from "@mui/material";
import Link from "next/link";
import React, {useState} from "react";

type Props = {};

export default function page({}: Props) {
	return (
		<>
			{/* <div className="flex justify-center px-3 py-2 items-center">Home page</div> */}
			<WorkspaceNav />

			<div className="px-3 py-2 grid gap-2 content-center  ">
				<div className="flex snap-x snap-mandatory gap-2 overflow-x-scroll">
					<Item name="t_shirt" />
					<Item name="Cxn" />
					<Item name="Thailand" />
					<Item name="MD" />
				</div>
				{/* <PreviewJSON /> */}
			</div>
		</>
	);
}

function Item({name}: {name: string}) {
	return (
		<div className="shrink-0 w-full snap-center px-3 py-2 rounded-xl border bg-zinc-200/50">
			<div className=" aspect-[3/4] flex justify-center items-center">
				<Preview Content={Label(name)}>{name}</Preview>
			</div>

			<div className="flex justify-center text-xl font-bold">{name}</div>
		</div>
	);
}

function Label(name: string) {
	return (
		<div className="grid grid-rows-6 h-full">
			<div className="row-span-5 p-3">
				<div className="border rounded-lg h-full flex justify-center items-center">
					Model {name}
				</div>
			</div>
			{/* <div className="ring px-3 py-2 flex">adad</div> */}

			<div className="row-span-1 px-3 py-4 flex justify-center">
				<Link
					href={`/workspace/lists/${name}`}
					className="px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 h-fit">
					{/* <div className="ring h-fit"></div> */}
					ดูรายละเอียด
				</Link>
			</div>
		</div>
	);
}
