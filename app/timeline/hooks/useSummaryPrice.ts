// export default function useSummaryPrice({}: Props) {
// 	// return (
// 	//   <div>useSummaryPrice</div>
// 	// )
// }

import Price from "../comp/collection/Price";
import {ItemType} from "../context/collection.context/types";

export function useSummaryItem({
	value,
	initialValue,
}: {
	value: ItemType;
	initialValue?: number;
}) {
	const {sleeve, neck, material} = value;
	// total shirt
	const totalAmont = sleeve.labels.reduce((period, current) => {
		return period + current.amont;
	}, initialValue || 0);
	const rate = Price.get({amont: totalAmont});
	const addOnPrice = material.price + neck.price + sleeve.price;

	return {rate, addOnPrice, totalAmont};
}
