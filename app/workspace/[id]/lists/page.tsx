"use client";
import ItemNav from "@/components/app/Navbar/ItemNav";
import {useAppContext} from "@/context/app/AppReducer";
import Link from "next/link";
import React, {useState} from "react";
import CreateOrderUI from "@/components/app/ui/CreateOrderUI";
import {ItemType, ListType, PriceListType} from "@/context/app/type";
import {Pricecalculator} from "@/libs/pricecalculator/Pricecalculator";
import {PriceLists} from "@/context/app/app.value";
import MenuListItem from "@/components/app/ui/MenuListItem";
import {usePathname, useRouter} from "next/navigation";
import ListAnimate from "@/components/app/ui/ListAnimate";
import {motion, AnimatePresence} from "framer-motion";
import CreateDialog from "@/components/app/ui/lists/create/CreateDialog";
import {Framer} from "@/libs/framer/framer";
import ItemDialog from "@/components/app/ui/lists/item/ItemDialog";
import Model3D from "@/components/app/ui/lists/item/Model3D";

type Props = {};

export default function page({}: Props) {
	return (
		<>
			{/* <AppNav /> */}

			<ItemNav />

			{/* <div className="px-3 py-2">
				<CreateDialog>+</CreateDialog>
			</div> */}

			{/* <ListAnimate /> */}
			<div className="px-3 py-2">
				<div className="grid gap-2">
					<Items />
				</div>
			</div>
		</>
	);
}

function Items() {
	const app = useAppContext();
	const {items} = app;

	// call
	const totals = Pricecalculator.totalOfItem({items, initial: 0});
	const {current} = Pricecalculator.get({amont: totals, price_list: PriceLists});

	// total detail
	let totalPrice: number = 0;
	let totalItems: number = 0;
	items.map((item) => {
		const {price, items, total} = Pricecalculator.orderPrice({
			item,
			rate: current,
		});

		totalPrice = totalPrice + price;
		totalItems = totalItems + total;
	});

	return (
		<div className="px-3 py-2 ">
			{/* items */}
			<AnimatePresence mode="popLayout">
				<div className="grid gap-2">
					{items.map((item, index) => (
						<Framer.Animate2 key={item.id}>
							<ItemUI item={item} rate={current} />
						</Framer.Animate2>
					))}

					<HandleOrderUI totalItems={totalItems} totalPrice={totalPrice} />
					<Framer.Animate2>
						<CreateOrderUI />
					</Framer.Animate2>
				</div>
			</AnimatePresence>
		</div>
	);
}

function ItemUI({
	item,
	rate,
}: {
	item: ItemType;
	rate: PriceListType | undefined;
}) {
	const {items, price, total} = Pricecalculator.orderPrice({item, rate});
	return (
		<>
			<div className="p-4 rounded-xl border bg-zinc-50">
				{/* row - 1 */}
				<ItemDialog item={item}>
					<div className="flex gap-3">
						<div className="basis-2/6 h-32 aspect-square rounded-lg flex items-center justify-center bg-zinc-100 text-zinc-600">
							{/* 3D Model */}
							<Model3D />
						</div>
						<div className="basis-4/6">
							<div className="flex justify-between">
								<div className="font-bold">
									{item.neck.name} {item.sleeve.name}
								</div>
							</div>
							{/* row material */}
							<div className="px-3 py-2">
								<div>ผ้า : {item.material.name}</div>
								<p className="text-sm/tight">คุณสมบัติ : {item.material.description}</p>
							</div>
						</div>
					</div>

					{/* row item desciiption */}
					<div className="grid gap-2 my-2">
						{items.map((listItem, index) => (
							<ListUI list={listItem.list} price={listItem.price} key={index} />
						))}
					</div>
				</ItemDialog>

				{/* row price */}
				<div className=" flex justify-end px-3">
					<div className="bg-zinc-900 rounded-full text-zinc-300  text-xs px-3 py-1">{`${total} ตัว : ${price} บาท`}</div>
				</div>
			</div>
		</>
	);
}

function ListUI({list, price}: {list: ListType; price: number}) {
	if (list.amont > 0)
		return (
			<div className="px-3 py-2  border-b last:border-none hover:bg-zinc-100 hover:cursor-pointer">
				<div className="flex justify-center">
					<div className="basis-4/12 text-2xl rigw">{list.label}</div>

					<div className="basis-full">
						<div className=" text-sm text-zinc-600">
							<div>รอบออก {list.chest} นิ้ว</div>
							<div>ความยาว {list.length} นิ้ว</div>
						</div>
						{/* <div className="">฿{price}</div> */}
					</div>
					<div className="basis-3/12 text-right">
						<div>{list.amont} ตัว</div>
						<div className="basis-4/12 font-bold">฿{price * list.amont}</div>
					</div>
				</div>
				{/* </ItemDialog> */}
			</div>
		);
}

function HandleOrderUI({
	totalItems,
	totalPrice,
}: {
	totalItems: number;
	totalPrice: number;
}) {
	return (
		<Framer.Animate2>
			<div className="grid gap-2">
				<div className="grid  gap-3 px-4 py-3 my-4 bg-zinc-900 text-zinc-300 rounded-xl">
					<div className="flex justify-between">
						<div>จำนวนรวม</div>
						<div>{totalItems} ตัว</div>
					</div>
					<div className="flex justify-between">
						<div>ราคารวม</div>
						<div>฿{totalPrice}</div>
					</div>
				</div>
			</div>
		</Framer.Animate2>
	);
}
