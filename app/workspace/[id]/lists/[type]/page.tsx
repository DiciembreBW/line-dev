"use client";
import ListNav from "@/components/app/Navbar/ListNav";
import SelectMaterial from "@/components/app/TypePage/SelectMaterial";
import AmontItemUI from "@/components/app/ui/AmontItemUI";
import Button from "@/components/ui/Button";
import {useAppContext, useAppDispatchContext} from "@/context/app/AppReducer";
import {PriceLists} from "@/context/app/app.value";
import {ItemType, ListType, PriceListType} from "@/context/app/type";
import {Pricecalculator} from "@/libs/pricecalculator/Pricecalculator";
import MenuUI from "@/ultils/mui/MenuUI";
import {Drawer, SwipeableDrawer} from "@mui/material";
import Link from "next/link";
import {useRouter, useSearchParams} from "next/navigation";
import React, {useEffect, useRef, useState} from "react";

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

	// const total = lists.reduce((period, present) => {
	// 	return period + present.amont;
	// }, 0);

	function handle() {
		router.back();
	}

	const {items, price, total} = Pricecalculator.orderPrice({
		item,
		rate: rate.current,
	});

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
					<div className="p-4 ">
						<Lists item={item} id={item.id} />
					</div>
				</div>
			</div>

			<div className="sticky bottom-0 p-2 bg-zinc-900 rounded-t-2xl text-zinc-200 ">
				<div className="flex justify-center items-center gap-4">
					<div>
						รวม {total} ตัว | ฿{price}
					</div>
					<div
						className="px-3 py-2 bg-zinc-50 text-zinc-800 rounded cursor-pointer"
						onClick={handle}>
						ตกลง
					</div>
				</div>
			</div>
		</div>
	);
}

function Lists({item, id}: {id: string; item: ItemType}) {
	return (
		<div className="grid grid-cols-1">
			{item.lists.map((list, index) => (
				<List key={index} id={id} value={list} item={item} />
			))}
		</div>
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
	//  init
	const app = useAppContext();
	const dispatch = useAppDispatchContext();
	const [state, setState] = useState<boolean>(false);
	const totalitems = Pricecalculator.totalOfItem({items: app.items});
	const rate = Pricecalculator.get({amont: totalitems, price_list: PriceLists});

	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		// console.log(ref);
		// console.log();
		const label = ref.current?.innerHTML;
		if (label == pickLabel) {
			ref.current?.scrollIntoView({behavior: "smooth", block: "center"});
		}
	}, []);
	const search = useSearchParams();
	const pickLabel = search.get("label");

	// functions
	function ppeCalculator(price: number | undefined): number {
		const p = price == undefined ? 0 : price;
		return (
			p + value.addOn + item.neck.price + item.sleeve.price + item.material.price
		);
	}

	const PPE = ppeCalculator(rate.current?.price);
	const PPE_NEXT = ppeCalculator(rate.next?.price);

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

	// render
	return (
		<div
			className={`p-2 border-b last:border-none rounded flex ${
				value.amont > 0 && "bg-zinc-200/50"
			}`}>
			{/* left */}
			<div className="basis-6/12 flex justify-center items-center">
				<div className="text-2xl" ref={ref}>
					{value.label}
				</div>
			</div>
			{/* center */}
			<div className="basis-full flex flex-col justify-center items-start">
				<div className=" text-zinc-500">
					<div>รอบอก {value.chest} นิ้ว</div>
					<div>ความยาว {value.length} นิ้ว</div>
				</div>
				<div className="font-bold">฿{PPE}</div>
			</div>
			{/* right */}
			<div className="basis-5/12 text-center">
				<div className="m-1 ">
					<button className="rounded-full border w-6 h-6 bg-zinc-50" onClick={up}>
						+
					</button>
				</div>

				<div className="text-xl">
					<AmontItemUI list={value} itemId={item.id}>
						{value.amont}
					</AmontItemUI>
				</div>
				<div className="m-1 ">
					<button className="rounded-full border w-6 h-6 bg-zinc-50" onClick={down}>
						-
					</button>
				</div>
			</div>
		</div>
	);
}
