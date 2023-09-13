import {ListType, MaterialType, NeckType, SleeveType} from "./type";

export const materialvalue: MaterialType[] = [
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

export const neckvalue: NeckType[] = [
	{name: "คอกลม", price: 0},
	{name: "คอวี", price: 10},
	{name: "คอโปโล", price: 20},
	{name: "คอจีน", price: 50},
];

export const sleevevalue: SleeveType[] = [
	{
		name: "แขนสั้น",
		price: 10,
	},
	{
		name: "แขนกุด",
		price: 0,
	},
	{
		name: "กล้าม",
		price: 0,
	},
	{
		name: "แขนยาว",
		price: 40,
	},
];

// export const tableofsizevalue: TableOfSizeType[] = [
// 	{
// 		name: "แขนสั้น",
// 		lists: [
// 			{label: "XXS", chest: 32, length: 1, addOn: 0, amont: 0},
// 			{label: "XS", chest: 34, length: 0, addOn: 0, amont: 0},
// 			{label: "S", chest: 36, length: 0, addOn: 0, amont: 0},
// 			{label: "M", chest: 38, length: 0, addOn: 0, amont: 0},
// 			{label: "L", chest: 40, length: 0, addOn: 0, amont: 0},
// 			{label: "XL", chest: 42, length: 0, addOn: 0, amont: 0},
// 			{label: "2XL", chest: 44, length: 0, addOn: 0, amont: 0},
// 			{label: "3XL", chest: 46, length: 0, addOn: 20, amont: 0},
// 			{label: "4XL", chest: 48, length: 0, addOn: 20, amont: 0},
// 			{label: "5XL", chest: 50, length: 0, addOn: 30, amont: 0},
// 			{label: "6XL", chest: 52, length: 0, addOn: 30, amont: 0},
// 		],
// 	},
// 	{
// 		name: "แขนกุด",
// 		lists: [
// 			{label: "XXS", chest: 32, length: 1, addOn: 0, amont: 0},
// 			{label: "XS", chest: 34, length: 0, addOn: 0, amont: 0},
// 			{label: "S", chest: 36, length: 0, addOn: 0, amont: 0},
// 			{label: "M", chest: 38, length: 0, addOn: 0, amont: 0},
// 			{label: "L", chest: 40, length: 0, addOn: 0, amont: 0},
// 			{label: "XL", chest: 42, length: 0, addOn: 0, amont: 0},
// 			{label: "2XL", chest: 44, length: 0, addOn: 0, amont: 0},
// 			{label: "3XL", chest: 46, length: 0, addOn: 20, amont: 0},
// 			{label: "4XL", chest: 48, length: 0, addOn: 20, amont: 0},
// 			{label: "5XL", chest: 50, length: 0, addOn: 30, amont: 0},
// 			{label: "6XL", chest: 52, length: 0, addOn: 30, amont: 0},
// 		],
// 	},
// 	{
// 		name: "กล้าม",
// 		lists: [
// 			{label: "XXS", chest: 32, length: 1, addOn: 0, amont: 0},
// 			{label: "XS", chest: 34, length: 0, addOn: 0, amont: 0},
// 			{label: "S", chest: 36, length: 0, addOn: 0, amont: 0},
// 			{label: "M", chest: 38, length: 0, addOn: 0, amont: 0},
// 			{label: "L", chest: 40, length: 0, addOn: 0, amont: 0},
// 			{label: "XL", chest: 42, length: 0, addOn: 0, amont: 0},
// 			{label: "2XL", chest: 44, length: 0, addOn: 0, amont: 0},
// 			{label: "3XL", chest: 46, length: 0, addOn: 20, amont: 0},
// 			{label: "4XL", chest: 48, length: 0, addOn: 20, amont: 0},
// 			{label: "5XL", chest: 50, length: 0, addOn: 30, amont: 0},
// 			{label: "6XL", chest: 52, length: 0, addOn: 30, amont: 0},
// 		],
// 	},
// 	{
// 		name: "แขนยาว",
// 		lists: [
// 			{label: "XXS", chest: 32, length: 1, addOn: 0, amont: 0},
// 			{label: "XS", chest: 34, length: 0, addOn: 0, amont: 0},
// 			{label: "S", chest: 36, length: 0, addOn: 0, amont: 0},
// 			{label: "M", chest: 38, length: 0, addOn: 0, amont: 0},
// 			{label: "L", chest: 40, length: 0, addOn: 0, amont: 0},
// 			{label: "XL", chest: 42, length: 0, addOn: 0, amont: 0},
// 			{label: "2XL", chest: 44, length: 0, addOn: 0, amont: 0},
// 			{label: "3XL", chest: 46, length: 0, addOn: 20, amont: 0},
// 			{label: "4XL", chest: 48, length: 0, addOn: 20, amont: 0},
// 			{label: "5XL", chest: 50, length: 0, addOn: 30, amont: 0},
// 			{label: "6XL", chest: 52, length: 0, addOn: 30, amont: 0},
// 		],
// 	},
// ];
