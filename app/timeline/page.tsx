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

type Props = {};

export default function TimelinePage({}: Props) {
	return (
		<div className="">
			{/* <div className="text-xl font-bold">TimelinePage</div> */}
			<CollectionProvider
				initValue={{
					name: "รันนิ่ง 2023",
					status: 1,
					item: [
						{
							text: "woradet",
							title: "title-1",
							neck: {name: "คอกลม"},
							sleeve: {name: "แขนสั้น"},
							amont: 3,
						},
						{
							text: "boonstat",
							title: "title-2",
							neck: {name: "คอวี"},
							sleeve: {name: "กล้าม"},
							amont: 12,
						},
					],
				}}>
				<Name />

				{/* <CreateItem /> */}
				<div className="px-4 grid grid-cols-1 gap-2">
					<WorkTimeline />
					<AddressPicker />
					<Items />
					<End />
				</div>

				{/* <PreCollection /> */}
			</CollectionProvider>
		</div>
	);
}

function L() {
	return <div className="px-3 py-2">click dadwaw</div>;
}
