"use client";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	Drawer,
	SwipeableDrawer,
} from "@mui/material";
import React, {useEffect, useRef, useState} from "react";
import {ItemType, LabelType} from "../../context/collection.context/types";

import Price from "./Price";
import {useCollectionContext} from "../../context/collection.context/CollectionReducer";
import {useSummaryItem} from "../../hooks/useSummaryPrice";

type Props = {};

export default function SwipeItem({item}: {item: ItemType}) {
	// const items = useCollectionContext()
	const {neck, sleeve, material} = item;
	const [select, setSelect] = useState<LabelType>();
	const [dialog, setDialog] = useState<boolean>(false);
	const {totalAmont, addOnPrice, rate} = useSummaryItem({value: item});
	const [labels, setLabel] = useState<LabelType[]>(item.sleeve.labels);
	// const total = item.sleeve.labels.reduce((period, current) => {
	// 	return period + current.amont;
	// }, 0);

	// const price = Price.get({amont: total});
	function handleSelected(value: LabelType) {
		// console.log(value);
		setSelect(value);
		// inp.current?.focus();
	}

	function handleOnchangeSelect(label: LabelType, value: string) {
		const amontInt = parseInt(value);
		const amont = isNaN(amontInt) ? 0 : amontInt;

		// console.log(select);

		setSelect((value) => {
			if (value == undefined) return;
			return {...value, amont};
		});

		UpdateItem(label, () => amont);
	}

	function onblur(label: LabelType, value: string) {
		const amontInt = parseInt(value);
		const amont = isNaN(amontInt) ? 0 : amontInt;
		UpdateItem(label, () => amont);
		setSelect(undefined);
	}

	function stepUp(label: LabelType) {
		// UpdateSelected((amont) => amont + 1);
		UpdateItem(label, (amont) => amont + 1);
	}

	function stepDown(label: LabelType) {
		if (select == undefined) return;
		if (select?.amont < 1) return;
		UpdateSelected((amont) => amont - 1);
		UpdateItem(label, (amont) => amont - 1);
	}

	function UpdateItem(
		label: LabelType,
		PenddingCallback: (amont: number) => number
	) {
		// if (select == undefined) return;

		const value = item.sleeve.labels.map((i, k) => {
			if (i == label) {
				i.amont = PenddingCallback(i.amont);
			}
			return i;
		});

		// console.log(value);
		setLabel(value);
	}

	function UpdateSelected(PenddingCallback: (amont: number) => number) {
		setSelect((value) => {
			if (value == undefined) return;
			return {...value, amont: PenddingCallback(value.amont)};
		});
	}

	return (
		<div className="px-3 py-2 border-b last:border-none flex justify-between hover:bg-zinc-300">
			<div onClick={() => setDialog(true)}>
				{item.neck.name} {item.sleeve.name}
			</div>
			<div>{totalAmont}</div>

			<Dialog
				open={dialog}
				onClose={() => setDialog(false)}
				fullScreen={true}
				transitionDuration={0}>
				<DialogTitle>
					<div className="flex justify-between ">
						<div className="font-bold text-xl">
							<button onClick={() => setDialog(false)}>{`X`}</button>
						</div>
						<div>
							{item.neck.name}
							{item.sleeve.name}
						</div>
					</div>
				</DialogTitle>
				<DialogContent>
					<div className="">
						{labels.map((label, index) => (
							<div
								key={index}
								className="border-b px-3 py-2 last:border-none grid grid-cols-9 items-center">
								<div className="text-xl col-span-2 font-bold">{label.label}</div>
								<div className="col-span-4">
									<div>รอบออก {label.chest} นิ้ว</div>
									<div className="text-xs text-zinc-500">
										ความยาว {label.length} นิ้ว
									</div>
									<div>{label.addOn + addOnPrice + rate.price}</div>
								</div>
								<div className="col-span-3 flex items-center gap-1">
									<button
										className="basis-2/6 rounded-full border"
										onClick={() => stepDown(label)}>
										-
									</button>
									<div className="basis-full">
										<input
											type="text"
											className="w-full text-center"
											value={label.amont}
											onChange={(e) => handleOnchangeSelect(label, e.target.value)}
										/>
									</div>
									<button
										className="basis-2/6 rounded-full border"
										onClick={() => stepUp(label)}>
										+
									</button>
								</div>
							</div>
						))}
					</div>
				</DialogContent>

				<div className="sticky bottom-0 px-3 py-2 bg-zinc-900 text-zinc-300 flex justify-between">
					<div>{totalAmont}</div>
				</div>
			</Dialog>
		</div>
	);
}
