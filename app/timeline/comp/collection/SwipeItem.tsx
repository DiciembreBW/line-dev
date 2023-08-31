"use client";
import {Drawer, SwipeableDrawer} from "@mui/material";
import React, {useState} from "react";
import {ItemType, LabelType} from "../../context/collection.context/types";

import Price from "./Price";
import {useCollectionContext} from "../../context/collection.context/CollectionReducer";

type Props = {};

export default function SwipeItem({item}: {item: ItemType}) {
	// const items = useCollectionContext()
	const {neck, sleeve, material} = item;
	const [select, setSelect] = useState<LabelType>();

	const total = item.sleeve.labels.reduce((period, current) => {
		return period + current.amont;
	}, 0);

	const price = Price.get({amont: total});
	function handleSelected(value: LabelType) {
		setSelect(value);
	}

	function handleOnchangeSelect(value: string) {
		// setSelect({...select, amont: value})
		console.log(value);
	}

	function stepUp() {
		// console.log(select);
		if (select == undefined) return;
		// setSelect({...select, amont: select?.amont + 1});
		setSelect((value) => {
			if (value == undefined) return;
			return {...value, amont: value.amont + 1};
		});
	}

	function stepDown() {
		if (select == undefined) return;
		if (select.amont == 0) return;
		setSelect({...select, amont: select?.amont - 1});

		// UpdateLabel();
	}

	function UpdateLabel() {
		const mylabel = item.sleeve.labels.map((i, k) => {
			if (i.label == select?.label) {
				i = select;
			}
			return i;
		});

		// setItem((value) => {
		// 	return {...value, label: mylabel};
		// });
	}

	return (
		<>
			<Swipe item={item}>
				<div className="p-4 bottom-0 ">
					<div className="text-xl px-3 py-2">
						เสื้อ{neck.name}
						{sleeve.name}
					</div>
					<div className="px-3 py-2 grid grid-cols-6 gap-3">
						{sleeve.labels.map((item, index) => (
							// item
							<div
								key={index}
								className={` w-12 aspect-square flex  relative
                 hover:rounded-lg hover:cursor-pointer select-none`}
								onClick={() => handleSelected(item)}>
								{/* label circle */}
								<div className="flex justify-start items-end">
									<div
										className={`border w-12 h-12 rounded-full flex justify-center items-center `}>
										{item.label}
									</div>
								</div>

								{/* is active */}
								{/* is amont is 0 */}
								{item.amont == 0 && <></>}

								{/* is amont is not 0 */}
								{item.amont > 0 && (
									<div
										className={` bg-zinc-700 border-zinc-80 text-zinc-400 border border-zine-400
									rounded-full p-1 absolute -right-2 -top-3 flex justify-center items-center z-50 text-xs `}>
										{item.amont}
									</div>
								)}
							</div>
						))}
					</div>

					{/* item spec */}
					<div className="px-3 py-2 text-center">
						<div className="px-3 py-2 text-sm">
							<div>
								รอบออก {select?.chest} นิ้ว | ความยาว {select?.length} นิ้ว
								<span className="font-bold"> (วิธีวัดขนาด)</span>
							</div>
							<div className="text-xs/loose text-zinc-600">
								<i>*** มีค่าความคลาดเคลื่อน บวก/ลบ 1-2นิ้ว</i>
							</div>
						</div>
					</div>

					{/* handle item */}
					{/* <div className="grid grid-cols-9 px-3 py-2">
						<div>dalkdjakdj</div>
					</div> */}
					<div className="px-3 py-2">
						<div className="px-3 py-2 text-zinc-500">จำนวน</div>
						<div className="grid grid-cols-9 content-center gap-2 items-center">
							{/* handle amont */}
							<div className="col-span-9 flex items-center">
								<div className="m-1">
									<button className="px-3 py-2" onClick={stepDown}>
										-
									</button>
								</div>
								<div className="m-1 w-full">
									<input
										type="text"
										className="border bg-transparent rounded-full border-zinc-700 p-2 focus:outline-none text-center w-full"
										// value={select?.amont || 0}
										value={select?.amont || 0}
										onChange={(e) => handleOnchangeSelect(e.target.value)}
									/>
								</div>
								<div className="m-1">
									<button className="px-3 py-2" onClick={stepUp}>
										+
									</button>
								</div>
							</div>

							{/* price */}
							<div className="col-span-9 justify-self-center">
								<div className="text-2xl ">{price.price}</div>
							</div>
						</div>
					</div>
				</div>
				{/* <pre>{JSON.stringify(select, null, 3)}</pre> */}
			</Swipe>
		</>
	);
}

function Swipe({children, item}: {children: React.ReactNode; item: ItemType}) {
	const {neck, sleeve} = item;
	const [state, setState] = useState<boolean>(false);
	function handleSwipe(state: boolean) {
		setState(state);
	}
	return (
		<>
			<div onClick={() => handleSwipe(true)}>
				<div className="flex pl-3 justify-between">
					<div>
						{neck.name} {sleeve.name}
					</div>
					<div>0 ตัว</div>
				</div>
			</div>

			<SwipeableDrawer
				anchor="bottom"
				open={state}
				onOpen={() => handleSwipe(true)}
				onClose={() => handleSwipe(false)}
				PaperProps={{
					sx: {
						borderTopLeftRadius: 22,
						borderTopRightRadius: 22,
						bottom: 0,
					},
					elevation: 4,
				}}
				sx={{
					// background: "transparent",
					bgcolor: "transparent",
				}}>
				{children}
				{/* </div> */}
			</SwipeableDrawer>
		</>
	);
}
