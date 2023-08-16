"use client";
import {OrderActionType, OrderType} from "@/libs/types/order_type";
import {Dispatch, createContext, useContext} from "react";

export const OrderContext = createContext<OrderType>({
	id: "",
	rate: {
		quantity: 0,
		price: 0,
		get: 0,
	},
	text: "",
	option_value: 0,
	sleeve: {
		price: 0,
		label: [],
	},
});
export const OrderDispatchContext = createContext<Dispatch<OrderActionType>>(
	() => {}
);

export function useOrderContext() {
	return useContext(OrderContext);
}

export function useOrderDispatchContext() {
	return useContext(OrderDispatchContext);
}
