"use client";
import Label from "@/components/app/LabelDIalog";
import WorkspaceNav from "@/components/app/Navbar/WorkspaceNav";
import Preview from "@/components/app/Preview";
import PreviewJSON from "@/components/app/PreviewJSON";
import {useAppContext} from "@/context/app/AppReducer";
import Link from "next/link";
import React from "react";

type Props = {};

export default function page({}: Props) {
	return (
		<>
			{/* <AppNav /> */}
			<WorkspaceNav />
			<div className="px-3 py-2">
				<div className="grid gap-2">
					<Item name="T-shirt" />
					<Item name="Tangtop" />
					{/* <Item />
					<Item />
					<Item /> */}
				</div>
			</div>

			<div className="px-3 py-2">
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

			<Action />
		</>
	);
}

function Action() {
	return (
		// <div className="flex gap-6 justify-center items-center ">
		// 	<div className="text-2xl">฿9,560.00</div>
		// 	<div className="">
		// 		<button className="px-3 py-2 rounded-xl bg-zinc-800 text-zinc-300">
		// 			<Link href="/workspace/lists">ตกลง</Link>
		// 		</button>
		// 	</div>
		// </div>

		<div className="flex flex-col justify-center items-center pt-2 pb-6 gap-1">
			<div className="rounded-full bg-zinc-800 text-zinc-100 p-2 flex items-center gap-6">
				<div className="gap-2 items-center pl-2">
					<div className="text-2xl font-bold">฿2,560.00</div>
				</div>

				<div className="bg-zinc-200 text-zinc-800 rounded-full p-1  self-end">
					<button className="px-3 py-1">เปิดออเดอร์</button>
				</div>
			</div>

			<PreviewJSON />
		</div>
	);
}

function Item({name}: {name: string}) {
	const app = useAppContext();
	const {id} = app;
	return (
		<div className="p-2 border rounded-lg shadow flex gap-2 justify-between">
			<div className="basis-6/12 h-40 rounded-lg bg-zinc-200/50 flex justify-center items-center">
				<Preview Content={Label(name)}>image</Preview>
			</div>

			<Link href={`/workspace/lists/${name}?id=${id}`} className="basis-6/12">
				<div className="">
					<div>
						<div className="text-xl">แขนสั้นคอกลม</div>
						<div>ผ้า Dry-tech</div>
						<div className="text-sm">
							Lorem ipsum, dolor sit amet consectetur adipisicing{" "}
						</div>
					</div>

					{/*  */}
					<div className="flex justify-between items-center">
						<div className="m-1 p-2 bg-zinc-800 text-zinc-300 rounded-lg">20 ตัว</div>
						<div>฿5,056.00</div>
					</div>
				</div>
			</Link>
		</div>
	);
}

// function Label(name: string) {
// 	return (
// 		<div className="grid grid-rows-6 h-full">
// 			<div className="row-span-5 p-3">
// 				<div className="border rounded-lg h-full flex justify-center items-center">
// 					Model {name}
// 				</div>
// 			</div>
// 			{/* <div className="ring px-3 py-2 flex">adad</div> */}

// 			<div className="row-span-1 px-3 py-4 flex justify-center">
// 				<Link
// 					href={`/workspace/lists/${name}`}
// 					className="px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 h-fit">
// 					{/* <div className="ring h-fit"></div> */}
// 					ดูรายละเอียด
// 				</Link>
// 			</div>
// 		</div>
// 	);
// }
