import {PriceListType} from "../types/price_type";
import {LabelType} from "../types/sleeve_type";

const Price = {
	get(amont: number | undefined, price_list: PriceListType[]): PriceListType {
		// const _amont = parseInt(amont);
		const value = amont || 0;

		const _price = price_list.filter((item, index) => {
			return value >= item.quantity;
		});

		const _length = _price.length - 1;
		if (!_length) return price_list[0];

		return _price[_length];
	},

	sumOfAmont({lists}: {lists: LabelType[]}, i?: number): number {
		return lists.reduce((period, current) => {
			return period + current.amont;
		}, 0);

		// return
	},
};

export default Price;
