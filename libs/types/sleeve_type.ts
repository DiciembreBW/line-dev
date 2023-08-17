// import {LabelType} from "./items_type";
export type LabelType = {
	label: string;
	chest: number;
	length: number;
	amont: number;
	price: number;
};

export type SleeveType = {
	name: string;
	price: number;
	label: LabelType[];
};

export const SleeveLists: SleeveType[] = [
	// {name: "แขนกุด", price: 0},
	// {name: "กล้าม", price: 0},
	{
		name: "แขนสั้น",
		price: 10,
		label: [
			{label: "XXS", chest: 32, length: 28, amont: 0, price: 0},
			{label: "XS", chest: 34, length: 30, amont: 0, price: 0},
			{label: "S", chest: 36, length: 32, amont: 0, price: 0},
			{label: "M", chest: 38, length: 34, amont: 0, price: 0},
			{label: "L", chest: 40, length: 36, amont: 0, price: 0},
			{label: "XL", chest: 42, length: 38, amont: 0, price: 0},
			{label: "2XL", chest: 44, length: 38, amont: 0, price: 0},
			{label: "3XL", chest: 46, length: 40, amont: 0, price: 0},
			{label: "4XL", chest: 48, length: 42, amont: 0, price: 10},
			{label: "5XL", chest: 50, length: 44, amont: 0, price: 10},
		],
	},
	{
		name: "แขนยาว",
		price: 50,
		label: [
			{label: "XXS", chest: 32, length: 28, amont: 0, price: 0},
			{label: "XS", chest: 34, length: 30, amont: 0, price: 0},
			{label: "S", chest: 36, length: 32, amont: 0, price: 0},
			{label: "M", chest: 38, length: 34, amont: 0, price: 0},
			{label: "L", chest: 40, length: 36, amont: 0, price: 0},
			{label: "XL", chest: 42, length: 38, amont: 0, price: 0},
			{label: "2XL", chest: 44, length: 38, amont: 0, price: 0},
			{label: "3XL", chest: 46, length: 40, amont: 0, price: 0},
			{label: "4XL", chest: 48, length: 42, amont: 0, price: 10},
			{label: "5XL", chest: 50, length: 44, amont: 0, price: 10},
		],
	},
];
