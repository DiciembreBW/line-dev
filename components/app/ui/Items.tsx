import CallAPI from "@/ultils/workspace-call-api";
import Link from "next/link";
import React from "react";

type Props = {id: string};

export default async function Items({id}: Props) {
	const items = await CallAPI.getItems();
	return (
		<div className="grid gap-1">
			{/* <pre>{JSON.stringify(item, null, 3)}</pre> */}
			{items.map((item, index) => (
				<div
					key={index}
					className="flex rounded-lg border shadow px-3 py-2 justify-between">
					<Link href={`/workspace/${item.id}`}>
						<div>{item.id}</div>
					</Link>
					<div>{item.counter}</div>
				</div>
			))}
		</div>
	);
}
