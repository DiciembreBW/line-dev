"use client";
import {SwipeableDrawer} from "@mui/material";
import React, {useState} from "react";
import {useCollectionDispatchContext} from "../../context/collection.context/CollectionReducer";

type Props = {};

export default function CreateItemWithIcon({}: Props) {
	const [status, setStatus] = useState<boolean>(false);
	const dispatch = useCollectionDispatchContext();
	function handleSwipe(status: boolean) {
		setStatus(status);
	}

	function Create() {
		dispatch({
			item: {
				type: "create",
				value: {
					amont: 12,
					neck: {name: "คอกลม"},
					sleeve: {name: "แขนสั้น"},
					text: "ddddd",
					title: "wdad",
				},
			},
		});

		setStatus(false);
	}
	return (
		<React.Fragment key={"bottom"}>
			<div className="">
				<div
					onClick={() => handleSwipe(true)}
					className="ring ring-zinc-300 text-zinc-300  flex justify-center items-center font-bold  w-6 aspect-square  rounded-full">
					+
				</div>
			</div>
			<SwipeableDrawer
				anchor="bottom"
				open={status}
				onOpen={() => handleSwipe(true)}
				onClose={() => handleSwipe(false)}>
				<div className="px-3 py-2">
					<div className="p-1">
						<button onClick={() => Create()}>Create</button>
					</div>
				</div>
			</SwipeableDrawer>
		</React.Fragment>
	);
}
