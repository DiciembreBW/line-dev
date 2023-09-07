"use client";
import AppProvider from "@/context/app/AppProvider";
import {AppType} from "@/context/app/type";
import {useSearchParams} from "next/navigation";
import React from "react";

type Props = {children: React.ReactNode};

export default function Layout({children}: Props) {
	const search = useSearchParams();
	const searchValue = search.get("id");
	const id = searchValue == null ? "" : searchValue;

	const init_value: AppType = {
		id,
		counter: 0,
	};

	return (
		<div className="">
			<AppProvider value={init_value}>{children}</AppProvider>
		</div>
	);
}
