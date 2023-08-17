import {MaterialType} from "./material_type";
import {NeckType} from "./neck_type";
import {PriceListType} from "./price_type";
import {LabelType, SleeveType} from "./sleeve_type";
import {UserProfileType} from "./user_profile_type";

export type OrderType = {
	text?: string;
	material: MaterialType;
	neck: NeckType;
	sleeve: SleeveType;
	option_value: number;
	rate: PriceListType;
	id?: string;
	user?: UserProfileType;
};

export type OrderActionType = {
	// text: string;

	item?: {
		// onchange?: LabelType;
		get?: {};
		type?: "sum_optin_price" | "increase" | "decrease" | "onchange" | "sumOfItem";
		label?: LabelType;
		// order?: OrderType;
		value?: string;
	};

	rate?: {
		type: "set";
		value: PriceListType;
	};

	option_value?: {
		type: "update";
		sleeve?: SleeveType;
		neck?: NeckType;
	};

	neck?: {
		type: "update";
		value: NeckType;
	};

	sleeve?: {
		type: "update";
		value: SleeveType;
	};

	material?: {
		type: "update";
		value: MaterialType;
	};
};

export const intial_order_value: OrderType = {
	id: "",
	neck: {name: "", price: 0},
	material: {name: "", price: 0},
	rate: {
		quantity: 0,
		price: 0,
		get: 0,
	},
	text: "",
	option_value: 0,
	sleeve: {
		name: "",
		price: 0,
		label: [],
	},
};
