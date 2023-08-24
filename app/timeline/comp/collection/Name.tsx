"use client";
import React, {useState} from "react";
import {
	useCollectionContext,
	useCollectionDispatchContext,
} from "../../context/collection.context/CollectionReducer";

type Props = {};

export default function Name({}: Props) {
	const collection = useCollectionContext();
	const dispatch = useCollectionDispatchContext();
	const [name, setName] = useState(collection.name);

	function onchange(value: string) {
		setName(value);
	}

	function onkeydown(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key == "Enter") {
			if (name == "") {
				dispatch({
					name: {
						type: "onchange",
						value: collection.name,
					},
				});

				setName(collection.name);
				return;
			}
			// setName
			// console.log("enter");
			dispatch({
				name: {
					type: "onchange",
					value: name,
				},
			});
		}
	}

	function onblue(value: string) {
		if (value == "") {
			dispatch({
				name: {
					type: "onchange",
					value: collection.name,
				},
			});

			setName(collection.name);
			return;
		}

		dispatch({
			name: {
				type: "onchange",
				value: name,
			},
		});
	}
	return (
		<div className="px-3 py-2  m-1 text-zinc-300 font-bold flex justify-center rounded-lg ">
			<input
				type="text"
				value={name}
				onChange={(e) => onchange(e.target.value)}
				onKeyDown={(e) => onkeydown(e)}
				onBlur={(e) => onblue(e.target.value)}
				className="px-3 py-1 text-center bg-transparent focus:outline-none border border-zinc-300 rounded-full"
			/>
		</div>
	);
}
