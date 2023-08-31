"use client";
import React from "react";
import {neckValue, sleeveValue} from "../../context/collection.context/types";
import {
	useCollectionContext,
	useCollectionDispatchContext,
} from "../../context/collection.context/CollectionReducer";

type Props = {};

export default function ItemPicker({}: Props) {
	return (
		<div className="flex overflow-x-auto snap-x snap-mandatory gap-2 px-3 pt-6 pb-6">
			{/* <Item /> */}
			<Item sleeveName="แขนสั้น" neckName="คอกลม" />
			<Item sleeveName="แขนยาว" neckName="คอกลม" />
			<Item sleeveName="แขนสั้น" neckName="คอวี" />

			{/* <Item />
			<Item />
			<Item /> */}
		</div>
	);
}

function Item({neckName, sleeveName}: {neckName: string; sleeveName: string}) {
	const dispatch = useCollectionDispatchContext();

	function onCreate() {
		const neck = neckValue.filter((item, index) => item.name == neckName)[0];
		const sleeve = sleeveValue.filter(
			(item, index) => item.name == sleeveName
		)[0];

		dispatch({
			item: {
				type: "create",
				value: {
					neck,
					sleeve,
					material: {name: "", description: "", price: 0},
				},
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
