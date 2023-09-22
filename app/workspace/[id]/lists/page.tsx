"use client";
import ItemNav from "@/components/app/Navbar/ItemNav";
import React from "react";
// import ListItem from "@/components/app/ui/lists/home/ListItem";
import {useAppContext} from "@/context/app/AppReducer";
import {Pricecalculator} from "@/libs/pricecalculator/Pricecalculator";
import {PriceLists} from "@/context/app/app.value";
import {AnimatePresence, motion} from "framer-motion";
import OrderSummary from "@/components/app/ui/lists/home/OrderSummary";
import OrderAction from "@/components/app/ui/lists/home/OrderAction";
import {ItemType, ListType, PriceListType} from "@/context/app/type";
import {Framer} from "@/libs/framer/framer";
import MenuListItem from "@/components/app/ui/MenuListItem";
import {usePathname, useRouter} from "next/navigation";

type Props = {};

export default function page({}: Props) {
	return (
		<>
			{/* <AppNav /> */}

			<ItemNav />

			<div className="px-3 py-2">
				<div className="grid gap-2">
					<ListItem />
				</div>
			</div>
		</>
	);
}

function ListItem({}: Props) {
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
						<ItemUI item={item} key={item.id} rate={current} />
					))}

					{/* summary */}
					<OrderSummary totalItems={totalItems} totalPrice={totalPrice} />

					{/* action */}
					<OrderAction />
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
			<Framer.Animate2>
				<motion.div className="p-4 rounded-xl border bg-zinc-50">
					{/* row - 1 */}
					{/* <ItemDialog item={item}> */}
					<div className="flex gap-3">
						<div className="basis-2/6 h-32 aspect-square rounded-lg flex items-center justify-center bg-zinc-100 text-zinc-600 ">
							3D Model
							{/* <Model3D /> */}
						</div>
						<div className="basis-4/6">
							<div className="flex justify-between">
								{/* name */}
								<div className="font-bold">
									{item.neck.name} {item.sleeve.name}
								</div>

								{/* menu */}

								<MenuListItem value={item}>...</MenuListItem>
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
				</motion.div>
			</Framer.Animate2>
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
		// console.log();
		router.replace(`${pathName}/${itemId}?label=${list.label}`);
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
