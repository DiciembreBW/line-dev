"use client";
import {useAppContext} from "@/context/app/AppReducer";
import React from "react";

type Props = {itemId: string};

export default function Json({itemId}: Props) {
	const app = useAppContext();

	return (
		<div>
			Json
			<pre>{JSON.stringify(itemId)}</pre>
		</div>
	);
}
