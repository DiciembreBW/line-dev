"use client";
import {useAppContext} from "@/context/app/AppReducer";
import Link from "next/link";
import React from "react";
import CreateDialog from "../ui/lists/create/CreateDialog";

type Props = {};

export default function ItemNav({}: Props) {
	const app = useAppContext();
	const {id} = app;

	return (
		<div className="flex items-center px-3 py-2 justify-between">
			<div className="flex items-center gap-3">
				{/* <Link href={`/workspace/${id}`}> เพิ่ม </Link> */}
				<CreateDialog>+</CreateDialog>
				<Link href={`/workspace/${id}/lists`}> รายการ </Link>
			</div>

			<div className=""></div>

			{/* <div className="">
				<Link href={`/workspace/${id}/item`}>Item </Link>
			</div> */}

			<div className="">
				<Link href={`/workspace`}>Workspace</Link>
			</div>
		</div>
	);
}
