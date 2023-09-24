"use client";
import {useAppContext} from "@/context/app/AppReducer";
import React, {useState} from "react";
import {ItemType, ListType, PriceListType} from "@/context/app/type";
import {Pricecalculator} from "@/libs/pricecalculator/Pricecalculator";
import {PriceLists} from "@/context/app/app.value";
import {usePathname, useRouter} from "next/navigation";
import OrderSummary from "./OrderSummary";
import OrderAction from "./OrderAction";
import Link from "next/link";

type Props = {};
export default function ListItem({}: Props) {
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
			<div className="grid gap-2">
				{items.map((item, index) => (
					<ItemUI item={item} key={item.id} rate={current} />
				))}

				{/* summary */}
				<OrderSummary totalItems={totalItems} totalPrice={totalPrice} />

				{/* action */}
				<OrderAction />
			</div>
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
	// price calculator
	const {items, price, total} = Pricecalculator.orderPrice({item, rate});

	// router
	const router = useRouter();
	const pathName = usePathname();

	return (
		<>
			{/* <Framer.Animate2> */}
			<div className="p-4 rounded-xl border bg-zinc-50">
				{/* row - 1 */}
				{/* <ItemDialog item={item}> */}
				<div className="flex gap-3">
					{/* image thumnail */}
					<Link
						href={`${pathName}/model`}
						className="basis-2/6 h-32 aspect-square rounded-lg flex items-center justify-center bg-zinc-100 text-zinc-600 ">
						3D Model
						{/* <Model3D /> */}
					</Link>

					<Link href={`${pathName}/${item.id}`} className="basis-4/6">
						<div className="flex justify-between">
							{/* name */}
							<div className="font-bold">
								{item.neck.name} {item.sleeve.name}
							</div>
							{/* menu */}
							{/* {pathName}/{item.id} */}
							{/* <MenuListItem value={item}>...</MenuListItem> */}
						</div>
						{/* row material */}
						<div className="px-3 py-2">
							<div>ผ้า : {item.material.name}</div>
							<p className="text-sm/tight">คุณสมบัติ : {item.material.description}</p>
						</div>
					</Link>
				</div>

				{/* row item desciiption */}
				<div className="grid gap-2 my-2">
					{items.map((listItem, index) => (
						<ListUI
							list={listItem.list}
							price={listItem.price}
							key={index}
							itemId={item.id}
						/>
					))}
				</div>
				{/* </ItemDialog> */}

				{/* row price */}
				<div className=" flex justify-end px-3">
					<div className="bg-zinc-900 rounded-full text-zinc-300  text-xs px-3 py-1">{`${total} ตัว : ${price} บาท`}</div>
				</div>
			</div>
			{/* </Framer.Animate2> */}
		</>
	);
}

function ListUI({
	list,
	price,
	itemId,
}: {
	list: ListType;
	price: number;
	itemId: string;
}) {
	const router = useRouter();
	const pathName = usePathname();
	function goToItem() {
		// go to item
		// router.replace(`${pathName}/${itemId}?label=${list.label}`);

		router.replace(`${pathName}/${itemId}`);
	}
	if (list.amont > 0)
		return (
			<div
				className="px-3 py-2  border-b last:border-none hover:bg-zinc-100 hover:cursor-pointer"
				onClick={goToItem}>
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
