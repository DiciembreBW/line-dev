"use client";
import {useOrderContext} from "@/libs/contexts/order.context/OrderContext";
import OrderProvider from "@/libs/contexts/order.context/OrderProvider";
import {OrderType} from "@/libs/types/order_type";
import Random from "@/libs/utilities/Random";
import React from "react";

type Props = {children: React.ReactNode};

const order: OrderType = {
	id: Random.id(),
	text: "botd",
	option_value: 0,
	sleeve: {
		price: 0,
		label: [],
	},
	rate: {
		get: 0,
		price: 0,
		quantity: 0,
	},
};
export default function CreateOrderPageLayout({children}: Props) {
	return (
		<div className="px-3 py-2">
			<OrderProvider order={order}>{children}</OrderProvider>
		</div>
	);
}
