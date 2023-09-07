import AppProvider from "@/context/app/AppProvider";
import {AppType} from "@/context/app/type";
import Host from "@/libs/utilities/Host";
import CallAPI from "@/ultils/workspace-call-api";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React from "react";

type Props = {children: React.ReactNode; params: {id: string}};

// async function get(id: string) {
// 	const res = await fetch(`${process.env.HOST_URL!}/api/workspace?id=${id}`);
// 	return await res.json();
// }

export default async function Layout({children, params}: Props) {
	// const id = await get(params.id);
	// const init_value = await CallAPI.getItem(params.id)

	const res = await CallAPI.getItem(params.id);

	if (res == null) {
		return (
			<div className="grid items-center justify-center h-screen">
				<div className="text-center">
					<div className="">No data</div>
					<Link href="/workspace" className="text-zinc-600">
						Back to workspace page
					</Link>
				</div>
			</div>
		);
	}
	// const init_value: AppType = {
	// 	id: params.id,
	// 	counter: 0,
	// };
	return (
		<div className="">
			<pre>{JSON.stringify(res)}</pre>
			{/* <AppProvider value={init_value}>{children}</AppProvider> */}
		</div>
	);
}
