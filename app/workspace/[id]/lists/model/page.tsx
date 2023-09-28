"use client";
import Model3D from "@/components/app/ui/lists/item/Model3D";
import Button from "@/components/ui/Button";
import {useAppContext, useAppDispatchContext} from "@/context/app/AppReducer";
import {useParams, useRouter, useSearchParams} from "next/navigation";
import React from "react";

type Props = {};

export default function ModelPage({}: Props) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const itemId = searchParams.get("item_id");
	const app = useAppContext();
	// const dispatch = useAppDispatchContext()

	const item = app.items.filter((item) => item.id == itemId)[0];
	// console.log(itemId);

	function handleOk() {
		router.back();
	}
	return (
		<div className="flex h-screen flex-col ">
			<div className="basis-full flex justify-center items-center text-zinc-400 ">
				{/* Model 3d */}
				<Model3D />
				{/* <div className="absolute bottom-0 left-0 p-2 text-zinc-800 text-xl">
					{item.sleeve.name}
					{item.neck.name} | {item.id}
				</div> */}
			</div>
			<div className="basis-2/6 rounded-t-2xl bg-zinc-200 p-4 shadow-xl grid justify-items-center">
				<div className="p-2 text-zinc-800 text-xl">
					{item.sleeve.name}
					{item.neck.name} | {item.id}
				</div>
				{/* </div> */}
				{/* <div>
					<pre>{JSON.stringify(item, null, 3)}</pre>
				</div> */}

				{/* bottom */}
				<div className="self-end">
					<Button primary onclick={handleOk}>
						ตกลง
					</Button>
				</div>
			</div>
		</div>
	);
}
