"use client";
import {useOrderContext} from "@/libs/contexts/order.context/OrderContext";
import React, {useEffect, useState} from "react";

type Props = {};

export default function TotalPrice({}: Props) {
	const order = useOrderContext();
	const [total, setTotal] = useState<number>();
	const {option_value, rate, sleeve} = order;
	useEffect(() => {
		const PPE = option_value + rate.price;
		// console.log(PPE);

		const _total = sleeve.label.reduce((period, current) => {
			return (current.price + PPE) * current.amont + period;
		}, 0);

		setTotal(_total);

		// console.log(_total);
	}, [order.sleeve.label, order.material, order.neck]);
	return <>{total}</>;
}
