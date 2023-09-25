import {UserProfile} from "../global/GlobalType";

export type AppType = {
	id: string;
	counter: number;
	init: boolean;
	address: string;
	user?: UserProfile;
	status: number;
	name: string;
	items: ItemType[];
};

export type AppActionType = {
	app?: {
		type: "create" | "update";
		value: AppType;
	};

	counter?: {
		type: "up" | "down" | "reset";
	};

	items?: {
		type: "create" | "remove";
		value: ItemType;
	};

	items_counter?: {
		type: "up" | "down";
		id: string;
	};

	items_lists?: {
		type: "up" | "down" | "set" | "reset" | "setzero";
		id: string;
		value?: ListType;
		amont?: number;
	};

	material?: {
		type: "create" | "remove";
		id: string;
		value: MaterialType;
	};

	artwork?: {
		type: "upload" | "remove";
		itemId: string;
		value: ArtworkType;
	};
};

// ********************************************************

export const init: AppType = {
	id: "",
	name: "",
	status: 0,
	counter: 0,
	init: false,
	address: "",
	items: [],
	user: {
		id: "",
		name: "",
		picture: "",
	},
};

// ********************************************************

export type ItemType = {
	id: string;
	conter: number;
	neck: NeckType;
	sleeve: SleeveType;
	material: MaterialType;
	artwork: ArtworkType;
	lists: ListType[];
};

// dependencie type
export type ArtworkType = {
	url: string;
	status: boolean;
};
export type NeckType = {
	name: string;
	price: number;
};

export type SleeveType = {
	name: string;
	price: number;
};

export type MaterialType = {
	name: string;
	description: string;
	price: number;
};

export type ListType = {
	label: string;
	chest: number;
	length: number;
	addOn: number;
	amont: number;
};

export type TableOfSizeType = {
	// name: string;
	// lists: ListType[];
	short: ListType[];
	long: ListType[];
};

export type PriceListType = {
	quantity: number;
	price: number;
	get: number;
};

export type DescirptionType = {
	price: number;
	total: number;
	items: {price: number; list: ListType}[];
};
