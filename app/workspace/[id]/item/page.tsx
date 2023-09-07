"use client";
import PreviewJSON from "@/components/app/PreviewJSON";
import {useAppContext, useAppDispatchContext} from "@/context/app/AppReducer";
import CallAPI from "@/ultils/workspace-call-api";
import React from "react";

type Props = {};

export default function Page({}: Props) {
	const dispatch = useAppDispatchContext();
	const app = useAppContext();

	function stepUp() {
		dispatch({
			counter: {
				type: "up",
			},
		});
	}
	function stepDown() {
		dispatch({
			counter: {
				type: "down",
			},
		});
	}

	function reset() {
		dispatch({
			counter: {
				type: "reset",
			},
		});
	}

	async function onsave() {
		// console.log("save");

		const data = await CallAPI.updateItem(app);
		console.log(data);

		// console.log(app);
	}
	return (
		<div className="px-3 py-2">
			<div className="flex gap-2">
				<div className="m-1">
					<button onClick={stepDown} className="border rounded px-3 py-2">
						-
					</button>
				</div>
				<div className="m-1">
					<button onClick={stepUp} className="border rounded px-3 py-2">
						+
					</button>
				</div>

				<div className="m-1">
					<button onClick={reset} className="border rounded px-3 py-2">
						Reset
					</button>
				</div>

				<div className="m-1">
					<button onClick={onsave} className="border rounded px-3 py-2">
						{" "}
						on save
					</button>
				</div>
			</div>
			<PreviewJSON />
		</div>
	);
}
