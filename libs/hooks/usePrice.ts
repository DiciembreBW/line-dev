import {PriceLists} from "@/libs/types/price_type";
import Price from "@/libs/utilities/Price";
import {
	useOrderContext,
	useOrderDispatchContext,
} from "../contexts/order.context/OrderContext";

export default function usePrice() {
	const order = useOrderContext();
	const dispatch = useOrderDispatchContext();

	function update() {
		const amont = order.sleeve.label.reduce((period, current) => {
			return period + current.amont;
		}, 0);

		const rate = Price.get(amont, PriceLists);
		dispatch({rate: {type: "set", value: rate}});
	}
	return {
		update: () => update(),
	};
}
