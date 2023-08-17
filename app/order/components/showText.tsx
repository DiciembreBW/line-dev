// "use client";
import {useOrderContext} from "@/libs/contexts/order.context/OrderContext";
import Order from "@/libs/utilities/Order";
import Price from "@/libs/utilities/Price";
import React, {useEffect, useState} from "react";
import TotalPrice from "./TotalPrice";
import {Secondary} from "@/libs/components/Button";
import liff from "@line/liff";
import Host from "@/libs/utilities/Host";

type Props = {};

export default function ShowText({}: Props) {
	const order = useOrderContext();
	const [total_labels, setTotalLabel] = useState<number>();

	useEffect(() => {
		const _total = Price.sumOfAmont({lists: order.sleeve.label});
		setTotalLabel(_total);
	}, [order]);

	function send() {
		const liffUrl = "https://liff.line.me/2000394306-EVnwMxlm";
		// window.alert(`${liffUrl}/id=${order.id}`);
		liff
			.sendMessages([{type: "text", text: `${liffUrl}/id=${order.id}`}])
			.then(() => {
				liff.closeWindow();
			});
		// window.alert(`${liffUrl}`);
	}

	function createOrder() {
		// Order.createOrder({id: order.id, data: order}).then((r) => {
		// 	// console.log(r);
		// 	// liff.sendMessages()
		// 	const liffUrl = "https://liff.line.me/2000394306-EVnwMxlm";
		// 	liff
		// 		.sendMessages([{type: "text", text: `${liffUrl}/id=${order.id}`}])
		// 		.then(() => {
		// 			liff.closeWindow();
		// 		});
		// });
	}
	return (
		<div className="sticky bottom-0 px-3 py-2 bg-neutral-50">
			{/* <div className="grid grid-cols-1 ">
				<div className="flex justify-between px-3 py-2">
					<div>{order.id}</div>
				</div>

				<div className="flex justify-between px-3 py-2">
					<div>ทั้งหมด</div>
					<div>{total_labels} ตัว</div>
				</div>

				<div className="flex justify-between px-3 py-2">
					<div>ราคา</div>
					<div>
						<TotalPrice /> บาท
					</div>
				</div>

				<div className="flex justify-center px-3 py-2">
					<Secondary onclick={createOrder}>Create Order</Secondary>
				</div>
			</div> */}
			{/* <pre>{JSON.stringify(order.option_value, null, 3)}</pre>
			<pre>{JSON.stringify(order.material, null, 3)}</pre>
			<pre>{JSON.stringify(order.neck, null, 3)}</pre>
			<pre>{JSON.stringify(order.sleeve.name, null, 3)}</pre>
			<pre>{JSON.stringify(order.sleeve.price, null, 3)}</pre> */}
		</div>
	);
}
