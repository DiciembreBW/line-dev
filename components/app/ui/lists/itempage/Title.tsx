"use client";
import {useAppContext} from "@/context/app/AppReducer";
import React from "react";

type Props = {id: string};

export default function Title({id}: Props) {
	const app = useAppContext();
	const item = app.items.filter((item) => item.id == id);

	// if (item.length < 0) return
	const value = item[0];
	return (
		<div className="flex gap-2 items-center">
			<div className="text-xl font-bold">
				{value.sleeve.name}
				{value.neck.name}
			</div>
			|<div className="text-zinc-400">{value.id}</div>
		</div>
	);
}
