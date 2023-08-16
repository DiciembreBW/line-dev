"use client";
import React from "react";
import {useAppContext} from "../contexts/app.context/AppContext";

type Props = {};

export default function PreviewAppContext({}: Props) {
	const app = useAppContext();
	return (
		<div className="px-3 py-2">
			<pre>{JSON.stringify(app, null, 6)}</pre>;
		</div>
	);
}
