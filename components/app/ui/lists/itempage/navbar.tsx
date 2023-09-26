"use client";
import {useAppContext} from "@/context/app/AppReducer";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
	const router = useRouter();
	const app = useAppContext();
	const {id} = app;
	function back() {
		router.back();
	}
	return (
		<div className="flex items-center px-3 py-2 justify-between">
			<div className="">
				{/* <Link href={`/workspace/${app.id}/lists`}>{`<-`} </Link> */}
				<div onClick={back} className="hover:cursor-pointer hover:bg-zinc-300">
					ย้อนกลับ
				</div>
			</div>
			<div className="">
				<Link href="/">SNAP </Link>
			</div>
		</div>
	);
}
