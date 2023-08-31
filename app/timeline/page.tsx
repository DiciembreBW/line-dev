import React, {useState} from "react";
// import {ItemsType} from "./types";
import CollectionProvider from "./context/collection.context/CollectionProvider";
import PreCollection from "./comp/collection/Pre";
import Name from "./comp/collection/Name";
import {CollectionType} from "./context/collection.context/types";
import Items from "./comp/collection/Items";
import CreateItem from "./comp/collection/CreateItem";
import End from "./comp/collection/End";
import Swipe from "@/libs/components/Swipe";
import WorkTimeline from "./comp/collection/WorkTimeline";
import AddressPicker from "./comp/collection/AddressPicker";
import Reserve from "./comp/collection/Reserve";
import Pre from "./comp/collection/Pre";
import Price from "./comp/collection/Price";
import Create from "./comp/collection/Create";
import ItemPicker from "./comp/collection/ItemPicker";
import {ListItem, SwipeableDrawer} from "@mui/material";
import SwipeItem from "./comp/collection/SwipeItem";
import ListItems from "./comp/collection/ListItems";

type Props = {};

const init = {
	name: "รันนิ่ง 2023",
	status: 0,
	address:
		"Office Of the University Building 2, 239 Huay Kaew Road, Suthep Subdistrict, Muang District, Chiang Mai Province Postal Code 50200",
	items: [
		{
			neck: {name: "คอกลม"},
			sleeve: {name: "แขนสั้น"},
			Category: {type: "short", price: 10, labels: []},
		},
		{
			neck: {name: "คอวี"},
			sleeve: {name: "กล้าม"},
			Category: {type: "curve", price: 0, labels: []},
		},
	],
};

export default function TimelinePage({}: Props) {
	return (
		<div className="">
			<CollectionProvider
				initValue={{
					name: "",
					address: "",
					status: 0,
					items: [],
				}}>
				<div className="px-3 py-2 rounded-b-3xl shadow-lg">
					<ItemPicker />
				</div>

				<div className="px-3 py-2 grid grid-cols-1 gap-2">
					<div className="p-3 border-b border-zinc-200 h-fit">
						<div className="my-2 text-xl">รายการเสื้อ</div>
						<ListItems />
					</div>

					<Node />

					<div className="p-3 h-fit grid gap-2">
						<button className="text-center px-3 py-2 rounded-full">
							สรุปรายละเอียด
						</button>

						<button className="text-center px-12 py-2 rounded-full border bg-zinc-700 text-zinc-200">
							สั่งผลิต
						</button>
					</div>
				</div>
				{/*  price*/}

				{/* <Name /> */}
				{/* <Reserve /> */}
				{/* <WorkTimeline /> */}
				{/* <AddressPicker /> */}
				{/* <Items /> */}
				{/* <CreateItem /> */}
				{/* <Create /> */}
				{/* <End /> */}
				{/* <PreCollection /> */}
			</CollectionProvider>
		</div>
	);
}

function Node() {
	return (
		<div className="p-3 border-b border-zinc-200 h-fit">
			<div className="my-2 text-xl">สรุป</div>
			<div className="grid grid-cols-1 gap-2">
				<div className="flex pl-3  justify-between">
					<div>ราคา</div>
					<div>32,460.-</div>
				</div>
				<div className="flex pl-3 justify-between">
					<div>ระยะเวลาผลิต</div>
					<div>ประมาณ 15 วัน</div>
				</div>
			</div>
		</div>
	);
}
