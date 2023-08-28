export type CollectionType = {
	name: string;
	status: number;
	address: string;
	item: ItemType[];
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
};

export type ItemType = {
	text: string;
	title: string;
	neck: NeckType;
	sleeve: SleeveType;
	amont: number;
};

// *****************************
export const initCollectionValue: CollectionType = {
	name: "",
	address: "",
	item: [],
	status: 0,
};

export const initValue: ItemType = {
	text: "",
	title: "",
	neck: {name: ""},
	sleeve: {name: ""},
	amont: 0,
};

export const neckValue: NeckType[] = [
	{name: "คอกลม"},
	{name: "คอวี"},
	{name: "คอโปโล"},
];

export const sleeveValue: SleeveType[] = [
	{name: "แขนสั้น"},
	{name: "แขนยาว"},
	{name: "แขนกุด"},
	{name: "กล้าม"},
];
// dependencie type
export type NeckType = {
	name: string;
};

export type SleeveType = {
	name: string;
};
