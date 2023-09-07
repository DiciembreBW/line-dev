import React from "react";
import CallAPI from "@/ultils/workspace-call-api";

type Props = {params: {id: string}};

async function Get(id: string) {
	const response = await fetch(
		// `${process.env.HOST_URL || ""}/api/workspace?id=${id}`,
		`${process.env.HOST_URL || ""}/api/workspace?id=${id}`,
		{cache: "no-cache"}
	);
	return await response.json();
}
export default async function WorkspaceItemPage({params}: Props) {
	const item = await Get(params.id);
	return (
		<div>
			<pre>{JSON.stringify(`${process.env.HOST_URL || ""}`, null, 3)}</pre>
			<pre>{JSON.stringify(item, null, 3)}</pre>
			<div className="text-xl font-bold">WorkspaceItemPage</div>
		</div>
	);
}
