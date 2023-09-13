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

export type ItemType = {
	id: string;
	conter: number;
	neck: NeckType;
	sleeve: SleeveType;
	material: MaterialType;
	lists: ListType[];
};

// dependencie type
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
