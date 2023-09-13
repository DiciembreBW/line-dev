import Link from "next/link";
import React from "react";

type Props = {};

export default function WorkspaceNav({}: Props) {
	return (
		<div className="flex items-center px-3 py-2 justify-between">
			<div className="flex gap-2">
				{/* <Link href="/workspace">ค้นหา </Link> */}
				<Link href="/workspace/create/lists">+</Link>
				{/* <Link href="/workspace/login">Login</Link> */}
			</div>
			<div className="">
				<Link href="/">SNAP </Link>
			</div>
			{/* <div className="">...</div> */}
		</div>
	);
}
