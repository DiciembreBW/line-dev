export type MaterialType = {
	name: string;
	description?: string;
	img?: string;
	price: number;
};

export const MaterialLists: MaterialType[] = [
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
