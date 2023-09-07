"use client";
import AppProvider from "@/context/app/AppProvider";
import {AppType} from "@/context/app/type";
import React from "react";

type Props = {children: React.ReactNode};

export default function Layout({children}: Props) {
	const init_value: AppType = {
		id: "",
		counter: 0,
	};
	return (
		<div className="">
			<div className="flex justify-center items-center px-3 py-2 font-light">
				Create your order
			</div>
			<AppProvider value={init_value}>{children}</AppProvider>
		</div>
	);
}
