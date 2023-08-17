"use client";
import TitleComponent from "@/libs/components/TitleComponent";
import {useOrderContext} from "@/libs/contexts/order.context/OrderContext";
import React, {useEffect, useState} from "react";

type Props = {};

export default function TotalPrice({}: Props) {
	const order = useOrderContext();
	const [total, setTotal] = useState<number>();
	// const {option_value, rate, sleeve} = order;
	return (
		<div className="">
			<TitleComponent>สรุปราคา</TitleComponent>
			<div className="grid grid-cols-1 gap-2 px-3 py-2">
				<div className="px-3 flex justify-between">
					<div>จำนวนทั้งหมด</div>
					<div>76 ตัว</div>
				</div>

				<div className="px-3 flex justify-between">
					<div>ราคา</div>
					<div>23,560 บาท</div>
				</div>

				<div className="px-3 flex justify-center">
					<div className="p-1">
						<button className="px-3 py-2 rounded border">เปิดออเดอร์</button>
					</div>
				</div>
			</div>
		</div>
	);
}
