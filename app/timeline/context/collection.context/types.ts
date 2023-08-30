export type CollectionType = {
	name: string;
	status: number;
	address: string;
	items: ItemType[];
};

export type CollectionActionType = {
	name?: {
		type: "onchange";
		value: string;
	};

	item?: {
		type: "create";
		value: ItemType;
	};

	status?: {
		type: "onchange";
		value: number;
	};

	address?: {
		type: "onchange";
		value: string;
	};

	material?: {
		type: "update";
		value: MaterialType;
		index: number;
	};
};

export type ItemType = {
	neck: NeckType;
	sleeve: SleeveType;
	material: MaterialType;
};

// *****************************
export const initCollectionValue: CollectionType = {
	name: "",
	address: "",
	items: [],
	status: 0,
};

// dependencie type
export type NeckType = {
	name: string;
	price: number;
};

export type SleeveType = {
	name: string;
	price: number;
	labels: LabelType[];
};

export type LabelType = {
	label: string;
	chest: number;
	length: number;
	addOn: number;
};

export type MaterialType = {
	name: string;
	description: string;
	price: number;
};

// intial value
export const initValue: ItemType = {
	neck: {name: "", price: 0},
	sleeve: {name: "", price: 0, labels: []},
	material: {name: "", description: "", price: 0},
};

export const neckValue: NeckType[] = [
	{name: "คอกลม", price: 0},
	{name: "คอวี", price: 10},
	{name: "คอโปโล", price: 20},
	{name: "คอจีน", price: 50},
];

export const sleeveValue: SleeveType[] = [
	{
		name: "แขนสั้น",
		price: 10,
		labels: [
			{label: "XXS", chest: 32, length: 1, addOn: 0},
			{label: "XS", chest: 34, length: 0, addOn: 0},
			{label: "S", chest: 36, length: 0, addOn: 0},
			{label: "M", chest: 38, length: 0, addOn: 0},
			{label: "L", chest: 40, length: 0, addOn: 0},
			{label: "XL", chest: 42, length: 0, addOn: 0},
			{label: "2XL", chest: 44, length: 0, addOn: 0},
			{label: "3XL", chest: 46, length: 0, addOn: 20},
			{label: "4XL", chest: 48, length: 0, addOn: 20},
			{label: "5XL", chest: 50, length: 0, addOn: 30},
			{label: "6XL", chest: 52, length: 0, addOn: 30},
		],
	},
	{
		name: "แขนกุด",
		price: 0,
		labels: [
			{label: "XXS", chest: 32, length: 1, addOn: 0},
			{label: "XS", chest: 34, length: 0, addOn: 0},
			{label: "S", chest: 36, length: 0, addOn: 0},
			{label: "M", chest: 38, length: 0, addOn: 0},
			{label: "L", chest: 40, length: 0, addOn: 0},
			{label: "XL", chest: 42, length: 0, addOn: 0},
			{label: "2XL", chest: 44, length: 0, addOn: 0},
			{label: "3XL", chest: 46, length: 0, addOn: 20},
			{label: "4XL", chest: 48, length: 0, addOn: 20},
			{label: "5XL", chest: 50, length: 0, addOn: 30},
			{label: "6XL", chest: 52, length: 0, addOn: 30},
		],
	},
	{
		name: "กล้าม",
		price: 0,
		labels: [
			{label: "XXS", chest: 32, length: 1, addOn: 0},
			{label: "XS", chest: 34, length: 0, addOn: 0},
			{label: "S", chest: 36, length: 0, addOn: 0},
			{label: "M", chest: 38, length: 0, addOn: 0},
			{label: "L", chest: 40, length: 0, addOn: 0},
			{label: "XL", chest: 42, length: 0, addOn: 0},
			{label: "2XL", chest: 44, length: 0, addOn: 0},
			{label: "3XL", chest: 46, length: 0, addOn: 20},
			{label: "4XL", chest: 48, length: 0, addOn: 20},
			{label: "5XL", chest: 50, length: 0, addOn: 30},
			{label: "6XL", chest: 52, length: 0, addOn: 30},
		],
	},
	{
		name: "แขนยาว",
		price: 40,
		labels: [
			{label: "XXS", chest: 32, length: 1, addOn: 0},
			{label: "XS", chest: 34, length: 0, addOn: 0},
			{label: "S", chest: 36, length: 0, addOn: 0},
			{label: "M", chest: 38, length: 0, addOn: 0},
			{label: "L", chest: 40, length: 0, addOn: 0},
			{label: "XL", chest: 42, length: 0, addOn: 0},
			{label: "2XL", chest: 44, length: 0, addOn: 0},
			{label: "3XL", chest: 46, length: 0, addOn: 20},
			{label: "4XL", chest: 48, length: 0, addOn: 20},
			{label: "5XL", chest: 50, length: 0, addOn: 30},
			{label: "6XL", chest: 52, length: 0, addOn: 30},
		],
	},
];

export const materialValue: MaterialType[] = [
	{
		name: "ดาวกระจาย",
		description: "เนื้อผ้าเรียบ โพลีฯ 100% สีสด สวย ลายทอเป็นรูขนาดเล็ก",
		price: 0,
	},
	{
		name: "เม็ดข้าวสาร",
		description: "เนื้อผ้าเรียบ โพลีฯ 100% สีสด สวย ลายทอเป็นเหมือนเม็ดข้าวสาร",
		price: 0,
	},
	{
		name: "Polyester",
		description: "เนื้อผ้าเรียบ โพลีฯ 100% สีสด สวย",
		price: 0,
	},
	{
		name: "รังผึ้ง",
		description: "เหมาะสำหรับนักวิ่ง สัมผัสนุ่ม ระบายอากาศดี",
		price: 0,
	},
	{
		name: "Dry-tech",
		description: "เหมาะสำหรับนักวิ่ง สัมผัสนุ่ม เบา บาง ระบายอากาศดี",
		price: 15,
	},

	{
		name: "Air Flow",
		description:
			"เหมาะสำหรับนักวิ่งทั่วไป จนถึงนักวิ่งมาราธอน น้ำหนักเบา ไม่อมเหงื่อ",
		price: 15,
	},
];
