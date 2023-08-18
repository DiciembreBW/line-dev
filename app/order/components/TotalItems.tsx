import {useOrderContext} from "@/libs/contexts/order.context/OrderContext";
import React, {useEffect, useState} from "react";

type Props = {};

export default function TotalItems({}: Props) {
	const order = useOrderContext();
	const [items, setItems] = useState<number>();
	useEffect(() => {
		// console.log(1234);
		const _items = order.sleeve.label.reduce((period, item) => {
			return period + item.amont;
		}, 0);

		setItems(_items);
	}, [order.sleeve.label]);
	return <>{items}</>;
}
