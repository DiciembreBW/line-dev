import AppProvider from "@/context/app/AppProvider";
import CallAPI from "@/ultils/workspace-call-api";
import Link from "next/link";
import React from "react";

type Props = {children: React.ReactNode; params: {id: string}};

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
		// <div className="">
		// 	{JSON.stringify(res)}
		// 	<AppProvider value={res}>{children}</AppProvider>
		// </div>
		<>{children}</>
	);
}
