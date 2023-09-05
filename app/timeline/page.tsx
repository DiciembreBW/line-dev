import React, {useState} from "react";
// import {ItemsType} from "./types";
import CollectionProvider from "./context/collection.context/CollectionProvider";
import ItemPicker from "./comp/collection/ItemPicker";
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
						{/* <SwipeItem /> */}
					</div>

					<div className="p-3 h-fit grid gap-2">
						{/* <button className="text-center px-3 py-2 rounded-full">
							สรุปรายละเอียด
						</button>

						<button className="text-center px-12 py-2 rounded-full border bg-zinc-700 text-zinc-200">
							สั่งผลิต
						</button> */}
						{/* <Preview /> */}
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
