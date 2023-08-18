import {PriceListType, PriceLists} from "@/libs/types/price_type";
import Price from "@/libs/utilities/Price";
import {
	useOrderContext,
	useOrderDispatchContext,
} from "../contexts/order.context/OrderContext";
import {useEffect, useState} from "react";

export default function usePrice() {
	const order = useOrderContext();
	const dispatch = useOrderDispatchContext();
	const [rate, setRate] = useState<PriceListType>();

	useEffect(() => {
		handleRate();
	}, [order.sleeve.label]);

	function handleRate() {
		// get all items
		const itemTotal = order.sleeve.label.reduce((period, item) => {
			return period + item.amont;
		}, 0);

		// get context
		const rate = Price.get(itemTotal, PriceLists);

		// update context
		dispatch({
			rate: {
				type: "set",
				value: rate,
			},
		});

		// update rate state
		setRate(rate);
	}

	return {rate};
}
