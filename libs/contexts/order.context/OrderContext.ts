"use client";
import {
	OrderActionType,
	OrderType,
	intial_order_value,
} from "@/libs/types/order_type";
import {Dispatch, createContext, useContext} from "react";

export const OrderContext = createContext<OrderType>(intial_order_value);
export const OrderDispatchContext = createContext<Dispatch<OrderActionType>>(
	() => {}
);

export function useOrderContext() {
	return useContext(OrderContext);
}

export function useOrderDispatchContext() {
	return useContext(OrderDispatchContext);
}
