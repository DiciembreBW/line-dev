"use client";
import {useGlobalContext} from "@/context/global/GlobalReducer";
import React from "react";

type Props = {};

export default function UserUI({}: Props) {
	const value = useGlobalContext();
	return (
		<div className="grid gap-2 justify-items-center p-6">
			{/* <div className="w-24 h-24 ring"> */}
			<img src={value.user.picture} className="w-48 h-48 rounded-full" alt="" />
			<div className="text-3xl">{value.user.name}</div>
			{/* </div> */}
			{/* <pre>{JSON.stringify(value, null, 3)}</pre> */}
		</div>
	);
}
