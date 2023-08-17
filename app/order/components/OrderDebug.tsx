"use client";
import {useOrderContext} from "@/libs/contexts/order.context/OrderContext";
import React from "react";

type Props = {};

export default function OrderDebug({}: Props) {
	const order = useOrderContext();
	return <pre>{JSON.stringify(order.material, null, 3)}</pre>;
}
