import Link from "next/link";
import React from "react";

type Props = {};

export default function WorkspaceNav({}: Props) {
	return (
		<div className="flex items-center px-3 py-2 justify-between">
			<div className="">
				<Link href="/workspace/"> Design </Link>
			</div>
			<div className="">
				<Link href="/workspace/lists">List </Link>
			</div>
			<div className="">...</div>
		</div>
	);
}
