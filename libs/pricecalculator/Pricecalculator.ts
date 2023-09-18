import {
	DescirptionType,
	ItemType,
	ListType,
	PriceListType,
} from "@/context/app/type";
// import {PriceListType} from "../types/price_type";
// import {LabelType} from "../types/sleeve_type";

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

	orderPrice({
		item,
		rate,
	}: {
		item: ItemType;
		rate: PriceListType | undefined;
	}): DescirptionType {
		// const materialprice = item.material.price
		const {material, neck, sleeve, lists} = item;
		const rateprice = rate?.price == undefined ? 0 : rate.price;
		const priceRate = material.price + neck.price + sleeve.price + rateprice;

		const items = lists.map((list) => {
			const price = list.addOn + priceRate;
			return {list, price};
		});

		const price = items.reduce((period, present) => {
			return period + present.list.amont * present.price;
		}, 0);

		const total = lists.reduce((period, present) => {
			return period + present.amont;
		}, 0);

		return {
			price,
			total,
			items,
		};
	},
};
