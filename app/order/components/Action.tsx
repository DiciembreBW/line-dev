"use client";
import {Secondary} from "@/libs/components/Button";
import {useOrderContext} from "@/libs/contexts/order.context/OrderContext";
import liff from "@line/liff";
import React from "react";

type Props = {};

export default function Action({}: Props) {
	const order = useOrderContext();
	function handle() {
		// console.log("handle");

		// console.log(order);

		liff
			.sendMessages([{type: "text", text: JSON.stringify(order)}])
			.then(() => liff.closeWindow());
	}

	return (
		<div className="flex justify-center px-3 py-2">
			<div className="p-1">
				<Secondary onclick={handle}>เปิดออร์เดอร์</Secondary>
			</div>
		</div>
	);
}
