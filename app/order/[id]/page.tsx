"use client";
import {Secondary} from "@/libs/components/Button";
import liff from "@line/liff";
import React from "react";

type Props = {params: {id: string}};

export default function OrderItem({params}: Props) {
	function send() {
		liff
			.sendMessages([{type: "text", text: "send message from server "}])
			.then(() => liff.closeWindow());
	}
	return (
		<div>
			<div>OrderItem</div>
			<pre>{JSON.stringify(params, null, 4)}</pre>

			<div>
				<Secondary onclick={send}>click</Secondary>
			</div>
		</div>
	);
}
