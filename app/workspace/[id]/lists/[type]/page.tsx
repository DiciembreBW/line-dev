"use client";
import ListNav from "@/components/app/Navbar/ListNav";
import SelectMaterial from "@/components/app/TypePage/SelectMaterial";
import Button from "@/components/ui/Button";
import {useAppContext, useAppDispatchContext} from "@/context/app/AppReducer";
import {PriceLists} from "@/context/app/app.value";
import {ItemType, ListType, PriceListType} from "@/context/app/type";
import {Pricecalculator} from "@/libs/pricecalculator/Pricecalculator";
import MenuUI from "@/ultils/mui/MenuUI";
import {Drawer, SwipeableDrawer} from "@mui/material";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React, {useState} from "react";

type Props = {params: {type: string}};

export default function Page({params}: Props) {
	const app = useAppContext();
	const router = useRouter();
	const dispatch = useAppDispatchContext();
	const item = app.items.filter((item) => item.id == params.type)[0];
	const totalitems = Pricecalculator.totalOfItem({items: app.items});
	const rate = Pricecalculator.get({amont: totalitems, price_list: PriceLists});

	if (item == undefined) return <>ไม่พบข้อมูล</>;

	const {conter, id, lists, material, neck, sleeve} = item;

	const total = lists.reduce((period, present) => {
		return period + present.amont;
	}, 0);

	function handle() {
		router.back();
	}
	return (
		<div className="flex flex-col h-screen bg-zinc-50">
			{/* <ListNav /> */}
			<div className="basis-3/6 flex flex-col">
				{/* Navbar */}
				<ListNav />

				{/* list */}
				<div className="px-3 py-2">
					{/* title */}
					<div className="flex justify-between">
						<div className="text-xl font-bold">
							{neck.name}
							{sleeve.name} | id :{id}
						</div>

						<div className="">
							<MenuUI item={item}>...</MenuUI>
						</div>
					</div>

					{/* material */}
					<div className="my-2 ">
						<SelectMaterial id={id} value={item.material}>
							กรุณาเลือกเนื้อผ้า{" "}
						</SelectMaterial>
					</div>

					{/* items detail */}
					<div className="p-4 flex flex-wrap gap-2 justify-center">
						{/* <pre>{JSON.stringify(item.lists, null, 3)}</pre> */}
						<Lists item={item} id={item.id} />
					</div>

					{/* <div className="p-4 flex flex-wrap gap-2 justify-center">
						Total 
					</div> */}
					{/* 
					<div className="flex justify-between px-3 py-2 rounded shadow">
						<div>Total</div>
						<div>{totalitems}</div>
					</div>

					<div className="flex justify-between px-3 py-2 rounded shadow">
						<div>CurrentPrice</div>
						{rate.current && <div>{rate.current.price}</div>}
					</div>

					<div className="flex justify-between px-3 py-2 rounded shadow">
						<div>Neck Price</div>
						<div>{item.neck.price}</div>
					</div>

					<div className="flex justify-between px-3 py-2 rounded shadow">
						<div>Sleeve Price</div>
						<div>{item.sleeve.price}</div>
					</div>

					<div className="flex justify-between px-3 py-2 rounded shadow">
						<div>Material Price</div>
						<div>{item.material.price}</div>
					</div> */}
				</div>
			</div>
			<div className="h-1/2 flex flex-col ">
				<div className="basis-full p-2 overflow-y-scroll flex justify-center items-center">
					{/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque provident,
					exercitationem natus dolorem dignissimos sapiente est animi quam. Eveniet
					odit di */}
					status
				</div>
				{/* control */}
				<div className="shrink-0 flex justify-between gap-1  bg-zinc-50 ">
					<div className="w-20 border flex justify-center items-center text-3xl">
						+
					</div>
					<div className="basis-full  p-2 border flex items-center">
						<input
							type="text"
							value="dadada"
							className="h-full w-full text-zinc-600 p-1 focus:outline-none"
							onChange={() => {}}
						/>
					</div>
					<div className="w-20 border flex justify-center items-center">send</div>
				</div>
			</div>

			{/* <pre>{JSON.stringify(item, null, 3)}</pre> */}

			{/* Description */}
			{/* <div className="grid content-end  px-5 py-4">
				<div className="flex gap-6 justify-center items-center ">
					<div className="text-2xl">{total} ตัว</div>
					<div className="">
						<button
							className="px-3 py-2 rounded-xl bg-zinc-800 text-zinc-300"
							onClick={handle}>
							ตกลง
						</button>
					</div>
				</div>
			</div> */}

			{/*  */}
		</div>
	);
}

function Lists({item, id}: {id: string; item: ItemType}) {
	return (
		<>
			{item.lists.map((list, index) => (
				<List key={index} id={id} value={list} item={item} />
			))}
		</>
	);
}

function List({
	value,
	id,
	item,
}: {
	value: ListType;
	id: string;
	item: ItemType;
}) {
	// return <div className="px-3 py-2">dada</div>;

	const app = useAppContext();
	const dispatch = useAppDispatchContext();
	const [state, setState] = useState<boolean>(false);
	const totalitems = Pricecalculator.totalOfItem({items: app.items});
	const rate = Pricecalculator.get({amont: totalitems, price_list: PriceLists});
	// const price = rate.current == undefined ? 0 : rate.current.price;

	// // ppe current
	// const PPE =
	// 	price +
	// 	value.addOn +
	// 	item.neck.price +
	// 	item.sleeve.price +
	// 	item.material.price;

	function ppeCalculator(price: number | undefined): number {
		const p = price == undefined ? 0 : price;
		return (
			p + value.addOn + item.neck.price + item.sleeve.price + item.material.price
		);
	}

	const PPE = ppeCalculator(rate.current?.price);
	const PPE_NEXT = ppeCalculator(rate.next?.price);

	function swipeOpen() {
		setState(true);
	}
	function swipeClose() {
		setState(false);
	}

	//

	function up() {
		dispatch({
			items_lists: {
				type: "up",
				id,
				value,
			},
		});
	}

	function down() {
		dispatch({
			items_lists: {
				type: "down",
				id,
				value,
			},
		});
	}

	function handleReset() {
		dispatch({
			items_lists: {
				type: "reset",
				id,
			},
		});
	}
	return (
		// <div className="h-12 w-12 border rounded-full flex justify-center items-center"></div>

		<>
			<div
				className="h-14 w-14 border rounded-full flex justify-center items-center bg-zinc-50 relative hover:cursor-pointer"
				onClick={swipeOpen}>
				<div className="">
					<div>{value.label}</div>
					{value.amont > 0 && (
						<div className="text-xs absolute -top-2 right-0 rounded-full bg-zinc-800 text-zinc-300 p-0.5">
							{value.amont}
						</div>
					)}
				</div>
			</div>
			<Drawer
				open={state}
				anchor="top"
				onClose={swipeClose}
				ModalProps={{
					// slotProps: {backdrop: {invisible: true}},
					slotProps: {
						backdrop: {
							invisible: true,
							// className: "bg-red-200",
							// sx: {
							// 	// backgroundColor: "transparent",
							// },
						},
					},
				}}
				PaperProps={{
					sx: {
						// borderTopRightRadius: 16,
						// borderTopLeftRadius: 16,
						borderBottomLeftRadius: 16,
						borderBottomRightRadius: 16,
						paddingTop: 8,
						paddingLeft: 2,
						paddingRight: 2,
						paddingBottom: 4,
						// padding: 3,
					},
				}}>
				{/* handle */}

				{/* amont */}
				<div className="flex justify-center items-center gap-6 relative">
					{/* close */}
					{/* <button
						className="absolute top-0 right-0 w-6 h-6 rounded-full flex justify-center items-center border"
						onClick={swipeClose}>
						x
					</button> */}
					{/* left */}
					<div className="m-1">
						<button
							className="w-16 h-16 border-2 border-zinc-400 rounded-full text-2xl text-zinc-400"
							onClick={down}>
							-
						</button>
					</div>
					{/* center */}
					<div className="m-1 flex justify-center items-center">
						<div className="grid content-center justify-center gap-2 h-full ">
							{/* label */}
							<div className="text-center">
								<div className="text-3xl">{value.label}</div>
							</div>

							<div className="text-4xl text-center font-bold">{value.amont}</div>

							{/* price Per each */}
							<div className="text-center text-xl">฿{PPE}</div>
						</div>
					</div>

					{/* right */}
					<div className="m-1">
						<button
							className="w-16 h-16 border-2 border-zinc-400 rounded-full text-2xl text-zinc-400"
							onClick={up}>
							+
						</button>
					</div>
				</div>

				<hr className="my-2" />

				<div className="flex justify-center my-2">
					<div className="text-sm text-zinc-400">
						<div>รอบออก {value.chest} นิ้ว</div>
						<div>ความยาว {value.length} นิ้ว</div>
					</div>
				</div>

				<hr className="my-2" />
				<div className="flex justify-center">รวมทั้งหมด {totalitems} ตัว</div>

				{/* <div className="flex justify-center">
					<Button primary onclick={swipeClose}>
						x
					</Button>
				</div> */}

				{/* <div className="text-zinc-400">
					<div>เรทถัดไป</div>
					<div>
						{rate.next?.quantity} ตัวๆละ {PPE_NEXT}
					</div>
				</div> */}
			</Drawer>
		</>
	);
}
