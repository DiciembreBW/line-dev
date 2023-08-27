"use client";
// import Swipe from "@/libs/components/Swipe";
import useSwipe from "@/libs/hooks/useSwipe";
import {Divider, SwipeableDrawer, getFabUtilityClass} from "@mui/material";
import React, {useEffect, useState} from "react";

// console.log("123");
type Props = {};

type LabelType = {
	label: string;
	chest: number;
	length: number;
	price: number;
	amont: number;
};
type SleeveType = {
	name: string;
	price: number;
	label: LabelType[];
};

const SleeveLists: SleeveType = {
	name: "แขนสั้น",
	price: 10,
	label: [
		{label: "XXS", chest: 32, length: 28, amont: 0, price: 0},
		{label: "XS", chest: 34, length: 30, amont: 0, price: 0},
		{label: "S", chest: 36, length: 32, amont: 0, price: 0},
		{label: "M", chest: 38, length: 34, amont: 0, price: 0},
		{label: "L", chest: 40, length: 36, amont: 0, price: 0},
		{label: "XL", chest: 42, length: 38, amont: 0, price: 0},
		{label: "2XL", chest: 44, length: 38, amont: 0, price: 0},
		{label: "3XL", chest: 46, length: 40, amont: 0, price: 0},
		{label: "4XL", chest: 48, length: 42, amont: 0, price: 10},
		{label: "5XL", chest: 50, length: 44, amont: 0, price: 10},
	],
};

export default function ItemDetial({}: Props) {
	const [items, setItem] = useState<SleeveType>(SleeveLists);
	const [select, setSelect] = useState<LabelType>();
	const [status, setStatus] = useState<boolean>(false);
	const total = items.label.reduce((period, current) => {
		return period + current.amont;
	}, 0);

	useEffect(() => {
		UpdateLabel();
	}, [select]);

	function handleSwipe(status: boolean) {
		setStatus(status);
	}

	function handleSelected(value: LabelType) {
		// console.log(value);
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
		const mylabel = items.label.map((i, k) => {
			if (i.label == select?.label) {
				i = select;
			}

			return i;
		});

		setItem((value) => {
			return {...value, label: mylabel};
		});
	}
	return (
		<React.Fragment key={"Item"}>
			<button className="text-lime-400" onClick={() => handleSwipe(true)}>
				ดูรายละเอียด
			</button>
			<SwipeableDrawer
				anchor="right"
				open={status}
				onClose={() => handleSwipe(false)}
				onOpen={() => handleSwipe(true)}
				disableSwipeToOpen={true}
				className="">
				<div className="bg-zinc-900 h-max text-zinc-400 px-3 py-2 ">
					<div className="px-3 py-2 flex justify-between items-center">
						{/* <Navbar> */}

						<button
							className="w-6 h-6 bg-lime-400 rounded-full text-zinc-800 font-bold"
							onClick={() => handleSwipe(false)}>
							{` <- `}
						</button>

						<div className="px-3 py-2 text-lime-400 font-bold text-xl">
							แขนสั้น คอกลม
						</div>
						{/* </Navbar> */}
					</div>

					<div className="px-3 py-2">
						<div className="px-3 py-2 text-zinc-500">ไซส์</div>
						<div className="px-3 py-2 grid grid-cols-5 gap-5">
							{items.label.map((item, index) => (
								<div
									key={index}
									className={` w-12 aspect-square flex  relative
                 hover:rounded-lg hover:cursor-pointer select-none `}
									onClick={() => handleSelected(item)}>
									<div className="flex justify-start items-end">
										<div
											className={`border w-12 h-12 rounded-full flex justify-center items-center ${
												item.label == select?.label && "border-lime-400 text-lime-400"
											}`}>
											{item.label}
										</div>
									</div>

									{item.amont !== 0 && (
										<div
											className={`
                    ${
																					item.label == select?.label &&
																					"bg-lime-400 border-zinc-800 text-zinc-800"
																				}
                                        ${
																																									item.label !== select?.label &&
																																									"bg-zinc-900"
																																								}
                     text-zinc-400 border border-zine-400 rounded-full p-1 absolute
                    -right-2 -top-3 flex justify-center items-center z-50 text-xs `}>
											{item.amont}
										</div>
									)}
								</div>
							))}
						</div>
					</div>

					<div className="px-3 py-2">
						<div className="px-3 py-2 text-sm">
							<div>
								รอบออก {select?.chest} นิ้ว | ความยาว {select?.length} นิ้ว
								<span className="text-lime-400"> (วิธีวัดขนาด)</span>
							</div>
							<div className="text-xs/loose text-zinc-600">
								<i>*** มีค่าความคลาดเคลื่อน บวก/ลบ 1-2นิ้ว</i>
							</div>
						</div>
					</div>

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
								<div className="text-2xl ">356.-</div>
							</div>
						</div>
					</div>

					<div className="px-3 py-2">
						<div className="px-3 py-2 text-sm">
							<div>ราคาคำนวนจากจำนวนทั้งหมดในออเดอร์</div>
							<div className="text-xs/loose text-lime-400">
								<i>เช็คตารางราคา</i>
							</div>
						</div>
					</div>

					<Divider className="bg-neutral-700 my-6" />
					<div className="px-3 py-2">
						<div className="px-3 py-2 text-zinc-500">รายละเอียด</div>
						<div className="grid grid-cols-6 px-3">
							<div className="col-span-4">จำนวน</div>
							<div className="col-span-2 justify-self-end">{total.toString()} ตัว</div>

							<div className="col-span-4">ราคา</div>
							<div className="col-span-2 justify-self-end">25,260 บาท</div>
						</div>
					</div>

					<div className="px-3 py-2">
						<div className="flex justify-center">
							<div className="m-1">
								<button
									className="px-6 py-2 border-lime-500 text-lime-400 border rounded-full"
									onClick={() => handleSwipe(false)}>
									บันทึก
								</button>
							</div>
						</div>
					</div>
				</div>
			</SwipeableDrawer>
		</React.Fragment>
	);
}

function Navbar({children}: {children?: React.ReactNode}) {
	return (
		<>
			<div className="px-3 py-2 text-lime-400 font-bold text-xl">
				แขนสั้น คอกลม
			</div>
			<div className="m-1">{children}</div>
		</>
	);
}
