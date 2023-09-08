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

	// if no item
	if (item == null) {
		return (
			<>
				<AppProvider
					value={{counter: 0, id: Random.id(), init: false, address: ""}}>
					{children}
				</AppProvider>
			</>
		);
	}
	return (
		<>
			<AppProvider value={item}>{children}</AppProvider>
		</>
	);
}
