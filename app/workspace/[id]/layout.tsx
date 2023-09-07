import AppProvider from "@/context/app/AppProvider";
import CallAPI from "@/ultils/workspace-call-api";
import React from "react";

type Props = {children: React.ReactNode; params: {id: string}};

export default async function WorkspaceItemPageLayout({
	children,
	params,
}: Props) {
	const item = await CallAPI.getItem(params.id);
	return (
		<>
			{/* <pre>{JSON.stringify(item, null, 3)}</pre> */}
			<AppProvider value={item}>{children}</AppProvider>
		</>
	);
}
