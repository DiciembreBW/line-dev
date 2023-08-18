"use client";
import {Secondary} from "@/libs/components/Button";
import {useAppContext} from "@/libs/contexts/app.context/AppContext";
import {useOrderContext} from "@/libs/contexts/order.context/OrderContext";
import Flex from "@/libs/utilities/Flex";
import liff from "@line/liff";
import React from "react";

type Props = {};

export default function Action({}: Props) {
	const order = useOrderContext();
	const app = useAppContext();
	function handle() {
		// liff
		// 	.sendMessages([{type: "text", text: JSON.stringify(order.rate)}])
		// 	.then(() => liff.closeWindow());

		const data = order.sleeve.label.map((item, index) => {
			return getData({label: item.label, amont: item.amont});
		});

		// console.log(data);

		// alert(data);

		// window.alert(app.user?.displayName);
		Flex.send({data, userName: app.user?.displayName});

		// liff.sendMessages([{type: "flex"}]);
	}

	return (
		<div className="flex justify-center px-3 py-2">
			<div className="p-1">
				<Secondary onclick={handle}>เปิดออร์เดอร์</Secondary>
			</div>
		</div>
	);
}

function getData({label, amont}: {label: string; amont: number}) {
	return {
		type: "box",
		layout: "horizontal",
		contents: [
			{
				type: "text",
				text: label,
				weight: "bold",
				// "contents": []
			},
			{
				type: "text",
				text: `${amont} ตัว`,
				color: "#a7a7a7ff",
				align: "end",
				// "contents": []
			},
		],
	};
}
// // start
// {
// 	type: "box",
// 	layout: "horizontal",
// 	contents: [
// 		{
// 			type: "text",
// 			text: "xl",
// 			weight: "bold",
// 			// "contents": []
// 		},
// 		{
// 			type: "text",
// 			text: "6 ตัว",
// 			color: "#a7a7a7ff",
// 			align: "end",
// 			// "contents": []
// 		},
// 	],
// },

// // end
