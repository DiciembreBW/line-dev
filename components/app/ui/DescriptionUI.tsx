import Button from "@/components/ui/Button";
import {useAppContext, useAppDispatchContext} from "@/context/app/AppReducer";
import {PriceLists} from "@/context/app/app.value";
import {
	DescirptionType,
	ItemType,
	ListType,
	PriceListType,
} from "@/context/app/type";
import {Pricecalculator} from "@/libs/pricecalculator/Pricecalculator";
import {Drawer, SwipeableDrawer} from "@mui/material";
import React, {useState} from "react";

type Props = {};

export default function DescriptionUI({}: Props) {
	const [state, setState] = useState<boolean>(false);
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

	// swipe handle
	function swipeOpen() {
		setState(true);
	}
	function swipeClose() {
		setState(false);
	}
	return (
		<div className="px-3 py-2 ">
			<div className="text-center ">
				<p className="hover:cursor-pointer underline" onClick={swipeOpen}>
					สรุปรายละเอียด
				</p>
			</div>

			<Drawer
				open={state}
				onClose={swipeClose}
				anchor="bottom"
				ModalProps={{}}
				PaperProps={{
					sx: {
						// borderTopLeftRadius: 16,
						// borderTopRightRadius: 16,
						padding: 2,
					},
				}}>
				{/* items */}
				<div className="grid gap-2">
					{items.map((item, index) => (
						<ItemUI key={index} item={item} rate={current} />
					))}
				</div>
				<ConditionTerm />

				<div className="p-4">
					<div className="grid  gap-3 border rounded-xl px-12 py-4">
						<div className="flex justify-between">
							<div>จำนวน</div>
							<div>{totalItems} ตัว</div>
						</div>
						<div className="flex justify-between">
							<div>ราคารวม</div>
							<div>฿{totalPrice}</div>
						</div>
						<div className="flex justify-center">
							<Button onclick={swipeClose}>ปิด</Button>
							<Button onclick={swipeClose} primary>
								สังผลิต
							</Button>
						</div>
					</div>
				</div>
			</Drawer>
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
				<div className="flex justify-between">
					<div className="text-xl">
						{item.neck.name} {item.sleeve.name}
					</div>
					<div className="text-zinc-300">id: {item.id}</div>
				</div>
				{/* row material */}
				<div className="px-3 py-2">
					<div>ผ้า : {item.material.name}</div>
					<p className="">คุณสมบัติ : {item.material.description}</p>
				</div>

				{/* row item desciiption */}
				<div>
					{items.map((item, index) => (
						<ListUI list={item.list} price={item.price} key={index} />
					))}
				</div>

				{/* row price */}
				<div className="flex px-12 py-2 justify-center gap-4  w-fit mx-auto font-bold">
					<div>{total} ตัว</div>
					<div>รวมราคา ฿{price}</div>
				</div>
			</div>

			{/* <hr className="last:border-none my-2" /> */}
		</>
	);
}

function ListUI({list, price}: {list: ListType; price: number}) {
	if (list.amont > 0)
		return (
			<div className="px-3 py-2 flex items-center border-b last:border-none">
				{/* <td className="text-center"></td> */}
				<div className="basis-4/12 text-2xl">{list.label}</div>

				<div className="basis-full">
					<div className=" text-sm text-zinc-400">
						<div>รอบออก {list.chest} นิ้ว</div>
						<div>ความยาว {list.length} นิ้ว</div>
					</div>
					<div className="">฿{price}</div>
				</div>
				<div className="basis-3/12">{list.amont} ตัว</div>
				<div className="basis-3/12 font-bold">฿{price * list.amont}</div>
			</div>
			// <div className=" basis-4/6 flex items-center w-full">
			// 	<div className="text-xl basis-2/6 ">{list.label}</div>
			// 	<div className="text-sm basis-4/2">
			// 		<div>รอบออก {list.chest} นิ้ว</div>
			// 		<div>ความยาว {list.length} นิ้ว</div>
			// 		<div className="font-bold">@.-</div>
			// 	</div>
			// </div>
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
