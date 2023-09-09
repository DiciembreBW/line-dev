"use client";
import {useGlobalContext} from "@/context/global/GlobalReducer";
import React from "react";

type Props = {};

export default function UserUI({}: Props) {
	const value = useGlobalContext();
	return (
		<div>
			<pre>{JSON.stringify(value, null, 3)}</pre>
		</div>
	);
}
