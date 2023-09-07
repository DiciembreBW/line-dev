import React from "react";
import CallAPI from "@/ultils/workspace-call-api";

type Props = {params: {id: string}};

async function Get(id: string) {
	// const URL = `${process.env.HOST_URL || ""}/api/workspace?id=${id}`;
	// const URL = `${process.env.HOST_URL}`;
	const response = await fetch(
		`${process.env.HOST_URL || ""}/api/workspace?id=${id}`,
		// `https://line-dev-smoky.vercel.app/api/workspace?id=${id}`,
		{cache: "no-cache"}
	);
	return await response.json();

	// return URL;
}
export default async function WorkspaceItemPage({params}: Props) {
	const item = await Get(params.id);
	return (
		<div>
			{/* <pre>{JSON.stringify(`${process.env.HOST_URL || ""}`, null, 3)}</pre> */}
			<pre>{JSON.stringify(item, null, 3)}</pre> adksakdjadj
			<div className="text-xl font-bold">WorkspaceItemPage</div>
		</div>
	);
}
