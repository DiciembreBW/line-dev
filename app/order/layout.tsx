"use client";
import {useAppContext} from "@/libs/contexts/app.context/AppContext";
import AppProvider from "@/libs/contexts/app.context/AppProvider";
import OrderProvider from "@/libs/contexts/order.context/OrderProvider";
import useLiff from "@/libs/hooks/useLiff";
import {OrderType} from "@/libs/types/order_type";
import Random from "@/libs/utilities/Random";
import React from "react";

type Props = {children: React.ReactNode};

export default function OrderLayout({children}: Props) {
	const {user} = useLiff({liffId: "2000394306-EVnwMxlm"});

	if (user == undefined)
		return (
			<div className="grid grid-cols-1 h-screen justify-items-center items-center">
				loading...
			</div>
		);

	return <AppProvider value={{user}}>{children}</AppProvider>;
	// return <div>{children}</div>;
}
