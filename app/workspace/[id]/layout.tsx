import AppProvider from "@/context/app/AppProvider";
import Random from "@/libs/utilities/Random";
import CallAPI from "@/ultils/workspace-call-api";
import React from "react";

type Props = {children: React.ReactNode; params: {id: string}};

export default async function WorkspaceItemPageLayout({
	children,
	params,
}: Props) {
	const item = await CallAPI.getItem(params.id);

	// return <>{params.id}</>;
	if (params.id == "create")
		return (
			<>
				<AppProvider
					value={{
						counter: 0,
						id: "create",
						init: false,
						address: "",
					}}>
					{children}
				</AppProvider>
			</>
		);

	if (item == null) return <>no value</>;

	return (
		<>
			<AppProvider value={item}>{children}</AppProvider>
		</>
	);
}
