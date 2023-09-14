"use client";
import Label from "@/components/app/LabelDIalog";
import ItemNav from "@/components/app/Navbar/ItemNav";
import Preview from "@/components/app/Preview";
import {useAppContext, useAppDispatchContext} from "@/context/app/AppReducer";
import Link from "next/link";
import React, {ReactElement, useState} from "react";
import AddressUI from "@/components/app/ui/AddressUI";
import TermUI from "@/components/app/ui/TermUI";
import CreateOrderUI from "@/components/app/ui/CreateOrderUI";
import UpdateWorkspaceUI from "@/components/app/ui/UpdateWorkspaceUI";
import CouterUI from "@/components/app/ui/CouterUI";
import UserUI from "@/components/global/ui/UserUI";
import PreviewJSON from "@/components/app/PreviewJSON";
import {ItemType} from "@/context/app/type";
import MenuUI from "@/ultils/mui/MenuUI";
import {MenuItem} from "@mui/base";
import SelectMaterial from "@/components/app/TypePage/SelectMaterial";

type Props = {};

export default function page({}: Props) {
	return (
		<>
			{/* <AppNav /> */}
			<ItemNav />
			{/* <PreviewJSON /> */}
			<div className="px-3 py-2">
				<div className="grid gap-2">
					<Items />
				</div>
			</div>

			<div className="px-3 py-2">
				<TermUI />
				<AddressUI />
				<CreateOrderUI />
			</div>
		</>
	);
}

function Items() {
	const app = useAppContext();
	const {items} = app;
	// return <pre>{JSON.stringify(app.items, null, 3)}</pre>;
	return (
		<>
			{items.map((item, index) => (
				<Item key={index} value={item} />
			))}
		</>
	);
}
function Item({value}: {value: ItemType}) {
	const app = useAppContext();
	const {id} = app;
	const {neck, sleeve, material, lists, id: item_id} = value;
	return (
		<div className="p-2 border rounded-lg shadow flex gap-2 justify-between">
			<div className="basis-6/12 h-40 rounded-lg bg-zinc-200/50 flex justify-center items-center">
				{/* <Preview Content={Label(name)}>image</Preview> */}
			</div>

			<div className="basis-6/12">
				<div>
					<div className="flex justify-between">
						<div className="text-xl">
							<Link href={`/workspace/${id}/lists/${item_id}`}>
								{sleeve.name}
								{neck.name}

								{/* {item_id} */}
							</Link>
						</div>
						<div className="">
							<MenuUI item={value}>...</MenuUI>
						</div>
					</div>
					{/* material */}

					{/* <pre className="text-sm">{JSON.stringify(value, null, 3)}</pre> */}
					<SelectMaterial id={value.id} value={value.material}>
						เลือกเนื้อผ้า
					</SelectMaterial>
				</div>

				{/*  */}
				<div className="flex justify-between items-center">
					<div className="">
						{value.lists.reduce((period, present) => {
							return period + present.amont;
						}, 0)}
						{` ตัว`}
					</div>
					<div>฿5,056.00</div>
				</div>
			</div>
		</div>
	);
}
