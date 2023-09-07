import React from "react";
import CallAPI from "@/ultils/workspace-call-api";

type Props = {params: {id: string}};

export default async function WorkspaceItemPage({params}: Props) {
	const item = await CallAPI.getItem(params.id);
	return (
		<div>
			<pre>{JSON.stringify(item, null, 3)}</pre>
			<div>WorkspaceItemPage</div>
		</div>
	);
}
