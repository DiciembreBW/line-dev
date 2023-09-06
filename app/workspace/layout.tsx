"use client";
import AppProvider from "@/context/app/AppProvider";
import {AppType} from "@/context/app/type";
import {useSearchParams} from "next/navigation";
import React from "react";

type Props = {children: React.ReactNode};
function usePx() {
	const Search = useSearchParams();
	const id = Search.get("id");
	return {id};
}

export default function Layout({children}: Props) {
	// const {id} = usePx();

	const searchParams = useSearchParams();
	const id = searchParams.get("id");

	const value: AppType = {id: id || "no value"};

	return (
		<div className="">
			<AppProvider value={value}>{children}</AppProvider>
		</div>
	);
}
