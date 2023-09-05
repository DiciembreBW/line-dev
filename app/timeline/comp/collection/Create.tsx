"use client";
import {Dialog, SwipeableDrawer} from "@mui/material";
import React, {useState} from "react";
import {
	SleeveType,
	NeckType,
	neckValue,
	sleeveValue,
} from "../../context/collection.context/types";
import {useCollectionDispatchContext} from "../../context/collection.context/CollectionReducer";
import Random from "@/libs/utilities/Random";

type Props = {};

export default function Create({}: Props) {
	const dispatch = useCollectionDispatchContext();
	const [state, setState] = useState(false);
	const [neck, setNeck] = useState<NeckType>();
	const [sleeve, setSleeve] = useState<SleeveType>();

	function handleDialog(state: boolean) {
		setState(state);
	}

	function handleNeckSelect(value: NeckType) {
		// console.log(value);
		setNeck(value);
	}
	function handleSleeveSelect(value: SleeveType) {
		// console.log(value);
		setSleeve(value);
	}
	function handleCreate() {
		if (neck == undefined || sleeve == undefined) return;

		// console.log(neck);
		// console.log(sleeve);
		const id = Random.id();

		dispatch({
			item: {
				type: "create",
				value: {
					counter: 0,
					lists: [],
					id,
					neck,
					sleeve,
					material: {name: "", description: "", price: 0},
				},
			},
		});

		handleDialog(false);
	}
	return (
		<React.Fragment key={"create"}>
			<div className="px-3 py-2 flex justify-center">
				<button
					className="ring w-12 h-12 rounded-full flex justify-center items-center
         ring-lime-400 text-lime-400 text-3xl"
					onClick={() => handleDialog(true)}>
					+
				</button>
			</div>

			<Dialog open={state} onClose={() => handleDialog(false)}>
				<div className="px-3 py-2 grid grid-cols-8 gap-1">
					<div className="col-span-8 w-full text-center px-2 py-1">แบบเสื้อ</div>
					<div className="col-span-8 w-64 border rounded p-2 grid grid-cols-1 gap-1">
						{/* <textarea className="border rounded w-72 h-48 p-2 focus:outline-none resize-none" /> */}
						<NeckUI onclick={handleNeckSelect} />
						<SleeveUI onclick={handleSleeveSelect} />
						{/* <NeckUI /> */}
					</div>
					<div className="col-span-8">
						<button
							className="px-2 py-1 border w-full rounded"
							onClick={handleCreate}>
							สร้างแบบเสื้อ
						</button>
					</div>
				</div>
			</Dialog>
		</React.Fragment>
	);
}

function NeckUI({onclick}: {onclick: (value: NeckType) => void}) {
	const [selected, setSelected] = useState<NeckType>();
	function handleSelect(value: NeckType) {
		setSelected(value);
		onclick(value);
	}

	return (
		<div className="gap-1 text-xs p-1">
			<div>คอเสื้อ</div>
			<div className="flex gap-1">
				{neckValue.map((item, index) => (
					<div key={index} className="" onClick={() => handleSelect(item)}>
						{selected?.name == item.name && (
							<div className="border p-1 rounded-lg bg-lime-400">{item.name}</div>
						)}

						{selected?.name !== item.name && (
							<div className="border p-1 rounded-lg">{item.name}</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

function SleeveUI({onclick}: {onclick: (value: SleeveType) => void}) {
	const [selected, setSelected] = useState<SleeveType>();
	function handleSelect(value: SleeveType) {
		setSelected(value);
		onclick(value);
	}

	return (
		<div className="gap-1 text-xs p-1">
			<div>แขน</div>
			<div className="flex gap-1">
				{sleeveValue.map((item, index) => (
					<div key={index} className="" onClick={() => handleSelect(item)}>
						{selected?.name == item.name && (
							<div className="border p-1 rounded-lg bg-lime-400">{item.name}</div>
						)}

						{selected?.name !== item.name && (
							<div className="border p-1 rounded-lg">{item.name}</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
