import AppNav from "@/components/app/Navbar/AppNav";
import React from "react";

type Props = {};

export default function page({}: Props) {
	return (
		<>
			<AppNav />
			<div className="px-3 py-2">
				<div className="grid gap-2">
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
				</div>
			</div>
		</>
	);
}

function Item() {
	return (
		<div className="p-2 border rounded-lg shadow flex gap-2 justify-between">
			<div className="basis-6/12 h-40 rounded-lg bg-zinc-200/50 flex justify-center items-center">
				image
			</div>
			<div className="basis-6/12">
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
		</div>
	);
}
