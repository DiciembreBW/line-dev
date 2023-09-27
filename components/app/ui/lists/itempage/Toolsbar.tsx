"use client";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import React from "react";

type Props = {};

export default function Toolsbar({}: Props) {
	const router = useRouter();
	const pathName = usePathname();
	const path = pathName.split("/");
	path.pop();
	const listPath = path.join("/");

	return (
		<div className="p-1 flex justify-center gap-1 border-t-2 border-b-2">
			{/* <div className="rounded-lg w-12 aspect-square flex justify-center items-center ring">
				<Link href={`${pathName}/material`}>Dry-tech</Link>
			</div> */}
			<div className="rounded-lg w-12 aspect-square flex justify-center items-center bg-zinc-200">
				100
			</div>
			{/* <div className="rounded-lg w-12 aspect-square"></div> */}
			<div className="rounded-lg w-12 aspect-square flex justify-center items-center bg-zinc-200">
				แชร์
			</div>
		</div>
	);
}
