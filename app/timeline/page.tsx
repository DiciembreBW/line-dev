import React from "react";
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
import Price from "./comp/collection/Price";
import Create from "./comp/collection/Create";

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
			{/* <div className="text-xl font-bold">TimelinePage</div> */}
			<CollectionProvider
				initValue={
					// {...init}
					{
						name: "",
						address: "",
						status: 0,
						items: [],
					}
				}>
				<Name />

				{/* <CreateItem /> */}
				<div className="px-4 grid grid-cols-1 gap-2">
					{/* <Reserve /> */}
					<WorkTimeline />
					<AddressPicker />
					<Items />
					{/* <CreateItem /> */}
					<Create />
					<End />
				</div>

				{/* <PreCollection /> */}
			</CollectionProvider>
		</div>
	);
}

// function CreateItem() {
// 	return <div className="px-3 py-2">click dadwaw</div>;
// }
