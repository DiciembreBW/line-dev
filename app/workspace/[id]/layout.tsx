import AppProvider from "@/context/app/AppProvider";
import {AppType} from "@/context/app/type";
import CallAPI from "@/ultils/workspace-call-api";
import React from "react";

type Props = {children: React.ReactNode; params: {id: string}};

export default async function WorkspaceItemPageLayout({
	children,
	params,
}: Props) {
	const item = await CallAPI.getItem<AppType>(params.id);

	// return <>{params.id}</>;
	if (params.id == "create")
		return (
			<>
				<AppProvider
					value={{
						name: "",
						counter: 0,
						status: 0,
						id: "create",
						init: false,
						address: "",
						items: [],
					}}>
					{children}
				</AppProvider>
			</>
		);

	if (item == null) return <>no value</>;

	return (
		<>
			{/* console.log(params.id); */}
			{/* {params.id} */}
			<AppProvider value={item}>{children}</AppProvider>
		</>
	);
}

// import React from "react";

// type Props = {children: React.ReactNode};

// export default function Layout({children}: Props) {
// 	return <div>{children}</div>;
// }
