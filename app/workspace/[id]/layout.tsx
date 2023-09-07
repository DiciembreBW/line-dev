import CallAPI from "@/ultils/workspace-call-api";
import React from "react";

type Props = {params: {id: string}};

export default async function WorkspaceItemPageLayout({params}: Props) {
	const item = await CallAPI.getItem(params.id);
	return (
		<div>
			<pre>{JSON.stringify(item)}</pre>
			<div>WorkspaceItemPageLayout</div>
		</div>
	);
}
