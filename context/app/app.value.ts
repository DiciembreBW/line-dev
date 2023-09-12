import {MaterialType, NeckType, SleeveType} from "./type";

export const sleeveValue: SleeveType[] = [
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

export const neckValue: NeckType[] = [
	{name: "คอกลม", price: 0},
	{name: "คอวี", price: 10},
	{name: "คอโปโล", price: 20},
	{name: "คอจีน", price: 50},
];
