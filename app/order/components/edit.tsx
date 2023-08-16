"use cient";
import {useOrderDispatchContext} from "@/libs/contexts/order.context/OrderContext";
import React, {useEffect, useState} from "react";

type Props = {};

export default function EditText({}: Props) {
	const [text, setText] = useState<string>("");
	const dispatch = useOrderDispatchContext();

	useEffect(() => {
		dispatch({
			text: text,
		});
	}, [text]);

	function handleOnchange(value: string) {
		setText(value);
	}

	function handleClick() {
		// dispatch({type: "update"});

		dispatch({
			option_value: {
				type: "update",
			},
		});
	}
	return (
		<div>
			<input
				type="text"
				value={text}
				onChange={(e) => handleOnchange(e.target.value)}
				className="round border"
			/>

			<button
				className="px-3 py-2 border rounded-full shadow"
				onClick={handleClick}>
				+
			</button>
		</div>
	);
}
