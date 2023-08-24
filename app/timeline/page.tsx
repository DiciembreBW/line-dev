import React from "react";
// import {ItemsType} from "./types";
import CollectionProvider from "./context/collection.context/CollectionProvider";
import PreCollection from "./comp/collection/Pre";
import Name from "./comp/collection/Name";
import {CollectionType} from "./context/collection.context/types";
import Items from "./comp/collection/Items";
import CreateItem from "./comp/collection/CreateItem";
import End from "./comp/collection/End";

type Props = {};

export default function TimelinePage({}: Props) {
	return (
		<div className="">
			{/* <div className="text-xl font-bold">TimelinePage</div> */}
			<CollectionProvider
				initValue={{
					name: "สามพรานรันนิ่ง 2023",
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
				<Items />
				<End />
				{/* <PreCollection /> */}
			</CollectionProvider>
		</div>
	);
}
