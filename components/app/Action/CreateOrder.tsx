"use client";
import {useAppContext, useAppDispatchContext} from "@/context/app/AppReducer";
import {useGlobalContext} from "@/context/global/GlobalReducer";
// import useLiff from "@/libs/hooks/useLiff";
import {line} from "@/ultils/line";
import CallAPI from "@/ultils/workspace-call-api";
import liff from "@line/liff";
import React, {useEffect} from "react";
type Props = {};

export default function CreateOrder({}: Props) {
	const app = useAppContext();
	const global = useGlobalContext();

	async function handleCreate() {
		const value = {...app, init: true, user: global.user};
		CallAPI.createItem(value).then((id) => {
			const textMessage = {
				link: `https://liff.line.me/2000394306-EVnwMxlm/${id}/lists`,
				create_at: Date.now(),
			};
			line.sendText([{type: "text", text: JSON.stringify(textMessage)}]);
		});
	}

	return (
		<div className="flex flex-col justify-center items-center pt-2 pb-6 gap-1">
			<div className="rounded-full bg-zinc-800 text-zinc-100 p-2 flex items-center gap-6">
				<div className="gap-2 items-center pl-2">
					<div className="text-2xl font-bold">฿2,560.00</div>
				</div>

				<div className="bg-zinc-200 text-zinc-800 rounded-full p-1  self-end">
					<button className="px-3 py-1" onClick={handleCreate}>
						เปิดออเดอร์
					</button>
				</div>
			</div>
		</div>
	);
}
