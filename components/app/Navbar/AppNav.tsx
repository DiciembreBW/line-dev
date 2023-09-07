import Link from "next/link";
import React from "react";

type Props = {};

export default function AppNav({}: Props) {
	return (
		<div className="flex items-center px-3 py-2 justify-between">
			<div className="">
				<Link href="/workspace"> Workspace </Link>
			</div>
			<div className="">
				<Link href="/">SNAP </Link>
			</div>
			{/* <div className="">...</div> */}
		</div>
	);
}