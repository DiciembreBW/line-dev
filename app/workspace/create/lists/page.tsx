"use client";
import CreateOrder from "@/components/app/Action/CreateOrder";
import Label from "@/components/app/LabelDIalog";
import AppNav from "@/components/app/Navbar/AppNav";
import ItemNav from "@/components/app/Navbar/ItemNav";
import Preview from "@/components/app/Preview";
import PreviewJSON from "@/components/app/PreviewJSON";
import ConditionTerm from "@/components/app/ui/ConditionTerm";
import {useAppContext} from "@/context/app/AppReducer";
import Link from "next/link";
import React from "react";
import {CreateNav, Model3D} from "../components";

type Props = {};

export default function page({}: Props) {
	return (
		<>
			{/* <AppNav /> */}
			{/* <ItemNav /> */}
			<CreateNav />
			<div className="px-3 py-2">
				<div className="grid gap-2">
					<Item name="T-shirt" />
					<Item name="Tangtop" />
				</div>
			</div>

			<ConditionTerm />
			<CreateOrder />
			<PreviewJSON />
		</>
	);
}

function Item({name}: {name: string}) {
	const app = useAppContext();
	const {id} = app;
	return (
		<div className="p-2 border rounded-lg shadow flex gap-2 justify-between">
			<div className="basis-6/12 h-40 rounded-lg bg-zinc-200/50 flex justify-center items-center">
				<Preview Content={Model3D(name)}>image</Preview>
			</div>

			<Link href={`/workspace/create/lists/${name}`} className="basis-6/12">
				<div className="">
					<div>
						<div className="text-xl">แขนสั้นคอกลม</div>
						<div>ผ้า Dry-tech</div>
						<div className="text-sm">
							Lorem ipsum, dolor sit amet consectetur adipisicing{" "}
						</div>
					</div>

					{/*  */}
					<div className="flex justify-between items-center">
						<div className="m-1 p-2 bg-zinc-800 text-zinc-300 rounded-lg">20 ตัว</div>
						<div>฿5,056.00</div>
					</div>
				</div>
			</Link>
		</div>
	);
}
