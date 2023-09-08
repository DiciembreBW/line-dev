import {useAppContext, useAppDispatchContext} from "@/context/app/AppReducer";
import React from "react";

type Props = {};

export default function CouterUI({}: Props) {
	const app = useAppContext();
	const dispatch = useAppDispatchContext();
	function down() {
		dispatch({
			counter: {
				type: "down",
			},
		});
	}
	function up() {
		dispatch({
			counter: {
				type: "up",
			},
		});
	}
	return (
		<div className="px-3 py-2 rounded-lg border shadow flex justify-center items-center">
			<div className="m-1">
				<button onClick={down} className="px-3 py-2 rounded border">
					-
				</button>
			</div>

			<div className="m-1 px-3 py-2 text-3xl">{app.counter}</div>

			<div className="m-1">
				<button onClick={up} className="px-3 py-2 rounded border">
					+
				</button>
			</div>
		</div>
	);
}
