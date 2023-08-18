"use client";
import TitleComponent from "@/libs/components/TitleComponent";
import {useOrderContext} from "@/libs/contexts/order.context/OrderContext";
import React, {useEffect, useState} from "react";
import HandleItem from "./HandleItem";
import TotalItems from "./TotalItems";
import TotalPrice from "./TotalPrice";
import Action from "./Action";

type Props = {};

export default function End({}: Props) {
	// const {option_value, rate, sleeve} = order;
	return (
		<div className="">
			<TitleComponent>สรุปราคา</TitleComponent>
			<div className="grid grid-cols-1 gap-2 px-3 py-2">
				<div className="px-3 flex justify-between">
					<div>จำนวนทั้งหมด</div>
					<HandleItem>
						<TotalItems /> ตัว
					</HandleItem>
				</div>

				<div className="px-3 flex justify-between">
					<div>ราคา</div>
					<div>
						<TotalPrice /> บาท
					</div>
				</div>

				<div className="px-3 flex justify-center">
					<Action />
				</div>
			</div>
		</div>
	);
}
