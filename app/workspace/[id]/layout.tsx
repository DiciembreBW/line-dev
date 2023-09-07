import AppProvider from "@/context/app/AppProvider";
import {AppType} from "@/context/app/type";
import React from "react";

type Props = {children: React.ReactNode; params: {id: string}};

async function get(id: string) {
	const res = await fetch(`http://localhost:3000/api/workspace?id=${id}`);
	return await res.json();
}

export default async function Layout({children, params}: Props) {
	const id = await get(params.id);

	const init_value: AppType = {
		id: id.value,
		counter: 0,
	};
	return (
		<div className="">
			<AppProvider value={init_value}>{children}</AppProvider>
		</div>
	);
}
