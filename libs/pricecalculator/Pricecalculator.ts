import {ItemType} from "@/context/app/type";
import {PriceListType} from "../types/price_type";
import {LabelType} from "../types/sleeve_type";

export const Pricecalculator = {
	// amont: number | undefined, price_list: PriceListType[]
	get({
		amont,
		price_list,
	}: {
		amont: number | undefined;
		price_list: PriceListType[];
	}): {current: PriceListType | undefined; next: PriceListType | undefined} {
		// const _amont = parseInt(amont);
		const value = amont || 0;

		const _price = price_list.filter((item, index) => {
			return value >= item.quantity;
		});

		const _price_next = price_list.filter((item, index) => {
			return value < item.quantity;
		});

		const current: PriceListType | undefined = _price[_price.length - 1];
		const next: PriceListType | undefined = _price_next[0];

		return {
			// price: current == undefined ? [] : current,
			// next: next == undefined ? [] : next,
			current,
			next,
		};
	},

	totalOfItem({items, initial}: {items: ItemType[]; initial?: number}): number {
		return items.reduce(
			(period, present) => {
				return (
					period +
					present.lists.reduce((o, c) => {
						return o + c.amont;
					}, 0)
				);
			},
			initial == undefined ? 0 : initial
		);
	},
};
