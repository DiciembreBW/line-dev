"use client";
import Label from "@/components/app/LabelDIalog";
import ItemNav from "@/components/app/Navbar/ItemNav";
import Preview from "@/components/app/Preview";
import {useAppContext} from "@/context/app/AppReducer";
import Link from "next/link";
import React, {useState} from "react";
import AddressUI from "@/components/app/ui/AddressUI";
import TermUI from "@/components/app/ui/TermUI";
import CreateOrderUI from "@/components/app/ui/CreateOrderUI";
import UpdateWorkspaceUI from "@/components/app/ui/UpdateWorkspaceUI";
import CouterUI from "@/components/app/ui/CouterUI";
import UserUI from "@/components/global/ui/UserUI";
import PreviewJSON from "@/components/app/PreviewJSON";

type Props = {};

export default function page({}: Props) {
	return (
		<>
			{/* <AppNav /> */}
			<ItemNav />
			{/* <UserUI /> */}
			<div className="px-3 py-2">
				<div className="grid gap-2">
					<Item name="T-shirt" />
					<Item name="Tangtop" />
				</div>
			</div>

			<div className="px-3 py-2">
				<TermUI />
				<AddressUI />
				{/* <CouterUI /> */}
				{/* <UpdateWorkspaceUI /> */}
				<CreateOrderUI />
			</div>
			{/* <PreviewJSON /> */}
		</>
	);
}
function Item({name}: {name: string}) {
	const app = useAppContext();
	const {id} = app;
	return (
		<div className="p-2 border rounded-lg shadow flex gap-2 justify-between">
			<div className="basis-6/12 h-40 rounded-lg bg-zinc-200/50 flex justify-center items-center">
				<Preview Content={Label(name)}>image</Preview>
			</div>

			<Link href={`/workspace/${id}/lists/${name}`} className="basis-6/12">
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
