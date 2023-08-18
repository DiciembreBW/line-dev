export type PriceListType = {
	quantity: number;
	price: number;
	get: number;
};

export const PriceLists: PriceListType[] = [
	{
		quantity: 1,
		price: 379,
		get: 0,
	},
	{
		quantity: 5,
		price: 369,
		get: 0,
	},
	{
		quantity: 11,
		price: 359,
		get: 0,
	},
	{
		quantity: 21,
		price: 339,
		get: 1,
	},
	{
		quantity: 31,
		price: 300,
		get: 1,
	},
	{
		quantity: 41,
		price: 270,
		get: 2,
	},
	{
		quantity: 71,
		price: 250,
		get: 2,
	},
	{
		quantity: 81,
		price: 220,
		get: 2,
	},
	{
		quantity: 101,
		price: 200,
		get: 3,
	},
	{
		quantity: 201,
		price: 180,
		get: 3,
	},
	{
		quantity: 301,
		price: 160,
		get: 4,
	},
	{
		quantity: 401,
		price: 150,
		get: 4,
	},
];
