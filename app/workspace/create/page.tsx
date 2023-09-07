"use client";
import WorkspaceNav from "@/components/app/Navbar/ItemNav";
import Preview from "@/components/app/Preview";
import PreviewJSON from "@/components/app/PreviewJSON";
import AppProvider from "@/context/app/AppProvider";
import {useAppContext} from "@/context/app/AppReducer";
import Link from "next/link";
import React from "react";
import {CreateNav, Model3D} from "./components";

type Props = {};

export default function page({}: Props) {
	return (
		<>
			<CreateNav />

			<div className="px-3 py-2 grid gap-2 content-center  ">
				<div className="flex snap-x snap-mandatory gap-2 overflow-x-scroll">
					<Item name="t_shirt" />
					<Item name="Cxn" />
					<Item name="Thailand" />
					<Item name="MD" />
				</div>
				<PreviewJSON />
			</div>
		</>
	);
}

function Item({name}: {name: string}) {
	return (
		<div className="shrink-0 w-full snap-center px-3 py-2 rounded-xl border bg-zinc-200/50">
			<div className=" aspect-[3/4] flex justify-center items-center">
				<Preview Content={Model3D(name)}>{name}</Preview>
			</div>

			<div className="flex justify-center text-xl font-bold">{name}</div>
		</div>
	);
}