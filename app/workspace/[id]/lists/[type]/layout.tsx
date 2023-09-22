// import Link from "next/link";
import React from "react";

type Props = {children: React.ReactNode};

export default function Layout({children}: Props) {
	return (
		<div className="bg-zinc-200/50 ">
			{/* <div className="grid justify-between px-3 py-2">
				<Link href={"/workspace/lists"} className="border rounded-lg px-3 py-2">
					Lists
				</Link>
			</div> */}
			{children}
		</div>
	);
}
