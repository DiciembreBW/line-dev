import {useOrderContext} from "@/libs/contexts/order.context/OrderContext";
import liff from "@line/liff";
import React from "react";

type Props = {};

export default function User({}: Props) {
	const order = useOrderContext();
	function onclick() {
		// console.log(123);
		liff.sendMessages([
			{type: "text", text: `สวัสดี ${JSON.stringify(order.user)}`},
		]);
	}
	return (
		<div className="grid grid-cols-1 items-center justify-items-center px-3 py-2">
			<div className="w-3/4">
				<img src={order.user?.pictureUrl} className="rounded-full" alt="" />
			</div>
			<div className="text-center flex flex-col px-3 py-2">
				<div className="text-3xl font-bold">{order.user?.displayName}</div>
				<div>{order.user?.statusMessage}</div>
			</div>
			<div className="p-1">
				<button className="px-3 py-2 border rounded" onClick={onclick}>
					Send
				</button>
			</div>

			{/* <div className="px-3 py-2">
				<pre>{JSON.stringify(liff.getContext(), null, 20)}</pre>
			</div> */}
		</div>
	);
}
