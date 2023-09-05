"use client";
import React from "react";
import {
	ItemType,
	neckValue,
	sleeveValue,
} from "../../context/collection.context/types";
import {
	useCollectionContext,
	useCollectionDispatchContext,
} from "../../context/collection.context/CollectionReducer";
import Random from "@/libs/utilities/Random";

type Props = {};

export default function ItemPicker({}: Props) {
	// const dispatch = useCollectionDispatchContext();
	// function oncreate() {
	// 	const id = Random.id();
	// 	dispatch({
	// 		item: {
	// 			type: "create",
	// 			value: {
	// 				id,
	// 				material: {description: "", name: "", price: 0},
	// 				neck: {name: "", price: 0},
	// 				sleeve: {labels: [], name: "", price: 0},
	// 			},
	// 		},
	// 	});
	// }
	return (
		<div className="flex overflow-x-auto snap-x snap-mandatory gap-2 px-3 pt-6 pb-6">
			{/* <Item /> */}
			<Item sleeveName="แขนสั้น" neckName="คอกลม" />
			<Item sleeveName="แขนยาว" neckName="คอกลม" />
			<Item sleeveName="แขนสั้น" neckName="คอวี" />

			{/* <Item />
			<Item />
			<Item /> */}
			{/* <button
				className="border rounded-lg shadow-lg px-3 py-2 hover:shadow"
				onClick={oncreate}>
				Create
			</button> */}
		</div>
	);
}

function Item({
	neckName,
	sleeveName,
}: // id,
{
	neckName: string;
	sleeveName: string;
	// id: string;
}) {
	const dispatch = useCollectionDispatchContext();

	const neck = neckValue.filter((item, index) => item.name == neckName)[0];
	const sleeve = sleeveValue.filter((item, index) => item.name == sleeveName)[0];
	const sleeve2 = sleeveValue.filter((item, index) => item.name == sleeveName)[0]
		.labels;

	//create item
	function onCreate() {
		const id = Random.id();

		const item: ItemType = {
			neck,
			counter: 0,
			id,
			sleeve,
			material: {name: "", description: "", price: 0},
			lists: sleeve2,
		};

		dispatch({
			item: {
				type: "create",
				value: item,
			},
		});
	}

	return (
		<div
			className="snap-center shrink-0 basis-3/6 aspect-[1/1]  rounded-3xl border  p-3
      grid grid-cols-1 content-end gap-2">
			<div className="text-center">
				<div>
					{neckName} {sleeveName}
				</div>
			</div>
			<div className="rounded text-center">
				<button className="border w-full rounded-xl" onClick={onCreate}>
					+
				</button>
			</div>
		</div>
	);
}
