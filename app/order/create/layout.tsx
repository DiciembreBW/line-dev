"use client";
import {useOrderContext} from "@/libs/contexts/order.context/OrderContext";
import OrderProvider from "@/libs/contexts/order.context/OrderProvider";
import {OrderType, intial_order_value} from "@/libs/types/order_type";
import Random from "@/libs/utilities/Random";
import React from "react";

type Props = {children: React.ReactNode};

const order: OrderType = intial_order_value;
export default function CreateOrderPageLayout({children}: Props) {
	return (
		<div className="px-3 py-2">
			<OrderProvider order={order}>{children}</OrderProvider>
		</div>
	);
}
