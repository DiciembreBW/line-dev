"use client";
import {useAppContext} from "@/context/app/AppReducer";
import React from "react";

type Props = {};

export default function PreviewJSON({}: Props) {
	const app = useAppContext();
	return (
		<div>
			<pre>{JSON.stringify(app, null, 3)}</pre>
		</div>
	);
}
