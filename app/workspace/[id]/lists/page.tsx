"use client";
import Label from "@/components/app/LabelDIalog";
import ItemNav from "@/components/app/Navbar/ItemNav";
import Preview from "@/components/app/Preview";
import {useAppContext, useAppDispatchContext} from "@/context/app/AppReducer";
import Link from "next/link";
import React, {ReactElement, useState} from "react";
import AddressUI from "@/components/app/ui/AddressUI";
import TermUI from "@/components/app/ui/TermUI";
import CreateOrderUI from "@/components/app/ui/CreateOrderUI";
import UpdateWorkspaceUI from "@/components/app/ui/UpdateWorkspaceUI";
import CouterUI from "@/components/app/ui/CouterUI";
import UserUI from "@/components/global/ui/UserUI";
import PreviewJSON from "@/components/app/PreviewJSON";
import {ItemType, ListType, PriceListType} from "@/context/app/type";
import MenuUI from "@/ultils/mui/MenuUI";
import {MenuItem} from "@mui/base";
import SelectMaterial from "@/components/app/TypePage/SelectMaterial";
import {Pricecalculator} from "@/libs/pricecalculator/Pricecalculator";
import {PriceLists} from "@/context/app/app.value";
import Description from "@/components/app/ui/DescriptionUI";
import Button from "@/components/ui/Button";
import {Drawer} from "@mui/material";
import MenuListItem from "@/components/app/ui/MenuListItem";
import {usePathname, useRouter} from "next/navigation";

type Props = {};

export default function page({}: Props) {
	return (
		<>
			{/* <AppNav /> */}
			<ItemNav />
			{/* <PreviewJSON /> */}
			<div className="px-3 py-2">
				<div className="grid gap-2">
					<Items />
					{/* <Description /> */}
				</div>
			</div>

			<div className="px-3 py-2">
				{/* <TermUI /> */}
				<CreateOrderUI />
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

		// return {
		// 	items, price, total
		// }
		// return Pricecalculator.orderPrice({item, rate: current});
	});

	return (
		<div className="px-3 py-2 ">
			{/* items */}
			<div className="grid gap-2">
				{items.map((item, index) => (
					<ItemUI key={index} item={item} rate={current} />
				))}
			</div>
			<div className="grid gap-2">
				<ConditionTerm />
				<AddressUI />
				<div className="grid  gap-3 px-4 py-3 ">
					<div className="flex justify-between">
						<div>จำนวนรวม</div>
						<div>{totalItems} ตัว</div>
					</div>
					<div className="flex justify-between">
						<div>ราคารวม</div>
						<div>฿{totalPrice}</div>
					</div>
					<div className="flex justify-center">
						<Button onclick={() => {}}>ปิด</Button>
						<Button onclick={() => {}} primary>
							สังผลิต
						</Button>
					</div>
				</div>
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
	const {items, price, total} = Pricecalculator.orderPrice({item, rate});
	return (
		<>
			<div className="p-4 rounded-xl border">
				{/* row - 1 */}
				<div className="flex gap-3">
					<div className="basis-2/6 h-32 aspect-square rounded-lg flex items-center justify-center bg-zinc-100 text-zinc-300">
						3D Model
					</div>
					<div className="basis-4/6">
						<div className="flex justify-between">
							<div className="font-bold">
								{item.neck.name} {item.sleeve.name}
							</div>
							<div className="text-zinc-300">
								<MenuListItem value={item}>...</MenuListItem>
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
						<ListUI
							list={listItem.list}
							price={listItem.price}
							key={index}
							listId={item.id}
						/>
					))}
				</div>

				{/* row price */}
				<div className=" flex justify-end px-3">
					<div className="bg-zinc-900 rounded-full text-zinc-300  text-xs px-3 py-1">{`${total} ตัว : ${price} บาท`}</div>
				</div>
			</div>

			{/* <hr className="last:border-none my-2" /> */}
		</>
	);
}

function ListUI({
	list,
	price,
	listId,
}: {
	list: ListType;
	price: number;
	listId: string;
}) {
	const router = useRouter();
	const pathname = usePathname();
	function handleEditItem() {
		// console.log(1234);
		router.push(`${pathname}/${listId}?label=${list.label}`);
		// console.log();
	}
	if (list.amont > 0)
		return (
			<div
				className="px-3 py-2 flex items-center border-b last:border-none hover:bg-zinc-100 hover:cursor-pointer"
				onClick={handleEditItem}>
				{/* <td className="text-center"></td> */}
				<div className="basis-4/12 text-2xl">{list.label}</div>

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
		);
}

function ConditionTerm() {
	return (
		<div className="p-4">
			<div>เงื่อนไข</div>
			<ol className="px-6 text-xs list-decimal">
				<li>
					เปิดออเดอร์ มัดจำค่าออกแบบ 1,000 หากลูกค้าสั่งผลิต
					เงินจำนวนนี้จะรวมในออเดอร์
				</li>
				<li>กรณีลูกค้ายกเลิกออเดอร์ เงินจำนวนดังกล่าวจะคิดเป็นค่าออกแบบ</li>
				<li>
					ระยะเวลาการผลิต จะคำนวนตามจำนวนที่สั่ง
					แอดมินจะแจ้งอีกทีหลังจากทราบจำนวนที่แท้จริง
					และนับระยะเวลาผลิตจากที่ลูกค้ายืนยันแบบ, ยืนยันสี และมัดจำ 50%
				</li>
				<li>
					กรณีลูกค้ามีกำหนด วัน/เวลา รับของที่ชัดเจน ให้แจ้งแอดมินก่อน
					เพื่อให้แอดมินเช็คเวลาสามารถการผลิตว่าสามารถทำได้ทันตามเวลาที่กำหนดหรือไม่
				</li>

				<li>กรณีลูกค้าแก้ไขข้อมูลในภายหลัง ราคาอาจมีการเปลี่ยนแปลง</li>

				<li>
					หลังจากเปิดออเดอร์แล้ว หากอยู่ในระหว่างการออกแบบ หรือสรุปสี
					ลูกค้าสามารถเปลี่ยน/จำนวนและราคาได้
				</li>
				<li>หากยืนยันการผลิตแล้วจะไม่สามารถเปลี่ยนแปลงข้อมูลได้</li>
			</ol>
		</div>
	);
}

function Items2() {
	const app = useAppContext();
	const {items} = app;
	const total = Pricecalculator.totalOfItem({items});

	return (
		<>
			{items.map((item, index) => (
				<Item key={index} value={item} />
			))}

			{/* <div className="flex justify-between px-3 py-2 rounded shadow border">
				<div>รวมทั้งหมด:</div>
				<div>{total} ตัว</div>
			</div> */}
		</>
	);
}
function Item({value}: {value: ItemType}) {
	const app = useAppContext();
	const {id} = app;
	const {neck, sleeve, material, lists, id: item_id} = value;

	const totals = Pricecalculator.totalOfItem({items: app.items});
	const rate = Pricecalculator.get({amont: totals, price_list: PriceLists});
	const {items, price, total} = Pricecalculator.orderPrice({
		item: value,
		rate: rate.current,
	});
	return (
		<div className="p-2 border rounded-lg shadow flex gap-2 justify-between">
			<div className="basis-6/12 h-40 rounded-lg bg-zinc-200/50 flex justify-center items-center"></div>

			<Link
				href={`/workspace/${id}/lists/${item_id}`}
				className="basis-6/12 flex flex-col">
				<div className="basis-full">
					<div className="flex justify-between">
						<div className="text-xl">
							{sleeve.name}
							{neck.name}
						</div>
					</div>
					{/* material */}
					<div className="flex justify-between">
						<div>{value.material.name}</div>
					</div>
					<div className="text-sm">
						<p className="">{value.material.description}</p>
					</div>
				</div>

				{/*  */}
				<div className="flex justify-between items-center basis-1/6">
					<div className="">
						{total}
						{` ตัว`}
					</div>
					<div>฿{price}</div>
				</div>
			</Link>
		</div>
	);
}
