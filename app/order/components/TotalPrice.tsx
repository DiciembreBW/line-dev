import {
	useOrderContext,
	useOrderDispatchContext,
} from "@/libs/contexts/order.context/OrderContext";
import {PriceLists} from "@/libs/types/price_type";
import Price from "@/libs/utilities/Price";
import React, {useEffect, useState} from "react";

type Props = {};

export default function TotalPrice({}: Props) {
	// const {option_value, rate, sleeve} = order;
	const order = useOrderContext();
	const [state, setState] = useState<number>();

	useEffect(() => {
		const PPE = order.option_value + order.rate.price;
		// console.log(PPE);

		const totalPrice = order.sleeve.label.reduce((period, item) => {
			return period + item.amont * (PPE + item.price);
		}, 0);

		setState(totalPrice);
	}, [order]);

	return (
		<>
			{/* <pre>total price neck : {JSON.stringify(order.neck.price, null, 3)}</pre>
			<pre>sleeve : {JSON.stringify(order.sleeve.price, null, 3)}</pre>
			<pre>material : {JSON.stringify(order.material.price, null, 3)}</pre>
			<pre>rate : {JSON.stringify(order.rate, null, 3)}</pre> */}

			{state}
		</>
	);
}
