"use client";
import Model3D from "@/components/app/ui/lists/item/Model3D";
import Button from "@/components/ui/Button";
import {useRouter} from "next/navigation";
import React from "react";

type Props = {};

export default function ModelPage({}: Props) {
	const router = useRouter();
	function handleOk() {
		router.back();
	}
	return (
		<div className="flex h-screen flex-col ">
			<div className="basis-full flex justify-center items-center text-zinc-400">
				{/* Model 3d */}
				<Model3D />
			</div>
			<div className="basis-1/2 rounded-t-2xl bg-zinc-200 p-4 shadow-xl flex justify-center items-end">
				<Button primary onclick={handleOk}>
					ตกลง
				</Button>
			</div>
		</div>
	);
}
