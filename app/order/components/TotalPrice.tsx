"use client";
import {useOrderContext} from "@/libs/contexts/order.context/OrderContext";
import React, {useEffect, useState} from "react";

type Props = {};

export default function TotalPrice({}: Props) {
	const order = useOrderContext();
	const [total, setTotal] = useState<number>();
	// const {option_value, rate, sleeve} = order;
	return <>{total}</>;
}
