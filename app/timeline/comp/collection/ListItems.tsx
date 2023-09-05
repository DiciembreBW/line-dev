"use client";
import React from "react";
import {
	useCollectionContext,
	useCollectionDispatchContext,
} from "../../context/collection.context/CollectionReducer";
import {ItemType, LabelType} from "../../context/collection.context/types";

type Props = {};

export default function ListItems({}: Props) {
	const collection = useCollectionContext();
	function Save() {
		console.log(collection);
	}
	return (
		<div>
			{/* <pre>{JSON.stringify(collection.items.length, null, 3)}</pre> */}
			{collection.items.map((item, index) => (
				<div key={index} className="ring px-3 py-2">
					{/* {item.id} | {item.neck.name} {item.sleeve.name} */}
					{/* {item.sleeve.id} */}
					{/* <div>
						<pre>{JSON.stringify(item.sleeve.labels[0].amont)}</pre>
					</div> */}
					<div className="ring">{item.counter}</div>
					<Item key={item.id} item={item} />

					{/* <pre>{JSON.stringify(item, null, 3)}</pre> */}
				</div>
			))}

			<div className="m-1">
				<button className="px-3 py-2 rounded border" onClick={Save}>
					Save
				</button>
			</div>
		</div>
	);
}

function Item({item}: {item: ItemType}) {
	const dispatch = useCollectionDispatchContext();
	const collection = useCollectionContext();

	function Update(label: LabelType) {
		dispatch({
			sleeve: {
				type: "update",
				id: item.id,
				label,
				value: item.lists.map((i) => {
					if (i.label == label.label) {
						i.amont++;
					}
					return i;
				}),
			},
		});
	}
	return (
		<>
			{item.neck.name} {item.sleeve.name} | {item.id}
			<pre>{JSON.stringify(item.sleeve.labels[0].amont)}</pre>
			<div className="grid grid-cols-4 gap-2 rounded-md border px-3 py-2">
				{item.lists.map((label, index) => (
					<div key={index} className="px-3 py-2 border rounded">
						<div>
							{label.label} | {label.amont} |
						</div>
						<button onClick={() => Update(label)}>+</button>
					</div>
				))}
			</div>
		</>
	);
}
