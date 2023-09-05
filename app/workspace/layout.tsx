"use client";
import AppProvider from "@/context/app/AppProvider";
import {AppType} from "@/context/app/type";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import React from "react";

type Props = {children: React.ReactNode};

export default function layout({children}: Props) {
	// const name = search.get("name");

	const value: AppType = {text: "Hello world"};

	return (
		<div className="">
			{/* <Navbar /> */}
			<AppProvider value={value}>{children}</AppProvider>
		</div>
	);
}

function Navbar() {
	return (
		<div className="px-3 py-2 flex gap-2 ">
			{/* <Link href={"/test/item"} className="border rounded-lg px-3 py-2">
				Item
			</Link> */}
			<Link href={"/test/lists"} className="border rounded-lg px-3 py-2">
				Lists
			</Link>
		</div>
	);
}
