"use client";
import React, {useEffect, useReducer} from "react";
import {OrderContext, OrderDispatchContext} from "./OrderContext";
import OrderReducer from "./OrderReducer";
import {OrderType} from "@/libs/types/order_type";

type Props = {children: React.ReactNode; order: OrderType};

export default function OrderProvider({children, order}: Props) {
	const [state, dispatch] = useReducer(OrderReducer, order);

	return (
		<OrderContext.Provider value={state}>
			<OrderDispatchContext.Provider value={dispatch}>
				{children}
			</OrderDispatchContext.Provider>
		</OrderContext.Provider>
	);
}
