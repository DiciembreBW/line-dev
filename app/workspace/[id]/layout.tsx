import AppProvider from "@/context/app/AppProvider";
import {AppType} from "@/context/app/type";
import Host from "@/libs/utilities/Host";
import React from "react";

type Props = {children: React.ReactNode; params: {id: string}};

async function get(id: string) {
	const res = await fetch(`${process.env.HOST_URL!}/api/workspace?id=${id}`);
	return await res.json();
}

export default async function Layout({children, params}: Props) {
	const id = await get(params.id);

	const init_value: AppType = {
		id: "",
		counter: 0,
	};
	return (
		<div className="">
			<pre>{JSON.stringify(id)}</pre>
			<AppProvider value={init_value}>{children}</AppProvider>
		</div>
	);
}
