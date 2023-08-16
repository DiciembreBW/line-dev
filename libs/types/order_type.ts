import {MaterialType} from "./material_type";
import {NeckType} from "./neck_type";
import {PriceListType} from "./price_type";
import {LabelType, SleeveType} from "./sleeve_type";
import {UserProfileType} from "./user_profile_type";

export type OrderType = {
	text?: string;
	material?: MaterialType;
	neck?: NeckType;
	sleeve: SleeveType;
	option_value: number;
	rate: PriceListType;
	id: string;
	user?: UserProfileType;
};

export type OrderActionType = {
	// text: string;
	text?: string;
	material?: MaterialType;
	neck?: NeckType;
	sleeve?: SleeveType;
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
	type?: "update";
	option_value?: {
		type: "update";
		sleeve?: SleeveType;
		neck?: NeckType;
	};
};
