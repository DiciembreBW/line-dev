"use client";
import {Drawer, SwipeableDrawer} from "@mui/material";
import React, {useRef, useState} from "react";
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
		// console.log(value);
		setSelect(value);
		// inp.current?.focus();
	}

	function handleOnchangeSelect(value: string) {
		const amontInt = parseInt(value);
		const amont = isNaN(amontInt) ? 0 : amontInt;

		// console.log(select);

		setSelect((value) => {
			if (value == undefined) return;
			return {...value, amont};
		});

		// UpdateItem(() => amont);
	}

	function onblur(value: string) {
		const amontInt = parseInt(value);
		const amont = isNaN(amontInt) ? 0 : amontInt;
		UpdateItem(() => amont);
		setSelect(undefined);
	}

	function stepUp() {
		UpdateSelected((amont) => amont + 1);
		UpdateItem((amont) => amont + 1);
	}

	function stepDown() {
		if (select == undefined) return;
		if (select?.amont < 1) return;
		UpdateSelected((amont) => amont - 1);
		UpdateItem((amont) => amont - 1);
	}

	function UpdateItem(PenddingCallback: (amont: number) => number) {
		if (select == undefined) return;

		item.sleeve.labels.map((i, k) => {
			if (i.label == select.label) {
				i.amont = PenddingCallback(i.amont);
			}
			return i;
		});
	}

	function UpdateSelected(PenddingCallback: (amont: number) => number) {
		setSelect((value) => {
			if (value == undefined) return;
			return {...value, amont: PenddingCallback(value.amont)};
		});
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
                 hover:rounded-lg hover:cursor-pointer select-none `}
								onClick={() => handleSelected(item)}>
								{/* label circle */}

								{/* is select label */}
								{select?.label == item.label && (
									<>
										<div className="flex justify-start items-end">
											<div
												className={`border w-12 h-12 rounded-full flex justify-center items-center
											ring-inset ring-2 ring-zinc-800 text-zinc-300 font-bold
											bg-zinc-800`}>
												<input
													type="text"
													className="w-full bg-transparent focus:outline-none text-center"
													value={select.amont || 0}
													onChange={(e) => handleOnchangeSelect(e.target.value)}
													onBlur={(e) => onblur(e.target.value)}
												/>
											</div>

											<div
												className={` bg-zinc-800 border-zinc-80 text-zinc-400 border border-zine-400
									rounded-full p-1 absolute -right-2 -top-3 flex justify-center items-center z-50 text-xs `}>
												{item.label}
											</div>
										</div>
									</>
								)}

								{/* else */}
								{select?.label !== item.label && (
									<div className="flex justify-start items-end">
										<div
											className={`border w-12 h-12 rounded-full flex justify-center items-center `}>
											{item.label}
										</div>
									</div>
								)}

								{/* ******************************** */}

								{/* is active */}
								{/* is amont is 0 */}
								{/* {item.amont == 0 && <></>} */}

								{item.amont > 0 && (
									<div
										className={` bg-zinc-800 border-zinc-80 text-zinc-400 border border-zine-400
									rounded-full p-1 absolute -right-2 -top-3 flex justify-center items-center z-50 text-xs `}>
										{select?.label == item.label ? <>{item.label}</> : <>{item.amont}</>}
									</div>
								)}

								{/* is amont is not 0 */}
								{/* {item.amont > 0 && (
									<div
										className={` bg-zinc-800 border-zinc-80 text-zinc-400 border border-zine-400
									rounded-full p-1 absolute -right-2 -top-3 flex justify-center items-center z-50 text-xs `}>
										{item.amont}
									</div>
								)} */}
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
									{/* input */}
									{/* <input
										type="text"
										className="border bg-transparent rounded-full border-zinc-700 p-2 focus:outline-none text-center w-full"
										value={select?.amont || 0}
										onChange={(e) => handleOnchangeSelect(e.target.value)}
									/> */}

									{/* price */}
									<div className="text-2xl text-center">{price.price}</div>
								</div>
								<div className="m-1">
									<button className="px-3 py-2" onClick={stepUp}>
										+
									</button>
								</div>
							</div>

							{/* price
							<div className="col-span-9 justify-self-center">
								<div className="text-2xl ">{price.price}</div>
							</div> */}

							{/* summary */}
							<div className="col-span-9 grid gap-3">
								<SummaryItem value={item} />
							</div>
						</div>
					</div>
				</div>
				{/* <pre>{JSON.stringify(select, null, 3)}</pre> */}
				{/* <pre>{JSON.stringify(item, null, 3)}</pre> */}
			</Swipe>
		</>
	);
}

function SummaryItem({
	value,
	initialValue,
}: {
	value: ItemType;
	initialValue?: number;
}) {
	const {sleeve, neck, material} = value;
	// total shirt
	const totalAmont = sleeve.labels.reduce((period, current) => {
		return period + current.amont;
	}, initialValue || 0);
	const rate = Price.get({amont: totalAmont});
	// add on price
	const addOnPrice = material.price + neck.price + sleeve.price;
	return (
		<>
			{/* totol shirts */}
			<div className="flex justify-between">
				<div>รวมจำนวน</div>
				<div>{totalAmont} ตัว</div>
			</div>
			{/* neck price */}
			{/* <div className="flex justify-between">
				<div>ราคาคอเสื้อ</div>
				<div>{neck.price}</div>
			</div> */}
			{/* sleeve price */}
			{/* <div className="flex justify-between">
				<div>ราคาแขนเสื้อ</div>
				<div>{sleeve.price}</div>
			</div> */}
			{/* material price */}
			{/* <div className="flex justify-between">
				<div>ราคาเนื้อผ้า</div>
				<div>{material.price}</div>
			</div> */}
			{/* add on price */}
			{/* <div className="flex justify-between">
				<div>รวมราคา คอ/แขน/ผ้า</div>
				<div>{addOnPrice}</div>
			</div> */}
			{/* base price */}
			{/* <div className="flex justify-between">
				<div>base price</div>
				<div>{rate.price}</div>
			</div> */}
			{/* base price */}
			<div className="flex justify-between">
				<div>ราคาเสื้อ</div>
				<div>{rate.price + addOnPrice}</div>
			</div>
			{/* <PriceRate title="คิดเรท" rate={rate.rate} addOnPrice={addOnPrice} /> */}
			<PriceRate title="เรทต่อไป" rate={rate.nextRate} addOnPrice={addOnPrice} />
			{/* <pre>{JSON.stringify(rate, null, 3)}</pre>; */}
		</>
	);
}

function PriceRate({
	rate,
	title,
	addOnPrice,
}: {
	rate?: {
		price: number;
		quantity: number;
		get: number;
	};
	title: string;
	addOnPrice: number;
}) {
	if (!rate) return <>No rate...</>;
	return (
		<div>
			{/* <div>{title}</div> */}
			<div className="flex justify-center font-bold">
				<div className="text-center">
					ถ้าสั่ง {rate.quantity} ตัวๆ ละ {rate.price + addOnPrice} บาท
				</div>
			</div>
		</div>
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
