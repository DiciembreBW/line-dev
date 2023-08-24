"use client";
import {SwipeableDrawer} from "@mui/material";
import React, {useState} from "react";
import {useCollectionDispatchContext} from "../../context/collection.context/CollectionReducer";

type Props = {};

export default function CreateItem({}: Props) {
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
			<div className="bg-lime-400 text-zinc-800 m-1 px-3 py-2 flex justify-between rounded-lg">
				<div className="">Create Item</div>
				<div onClick={() => handleSwipe(true)}>+</div>
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
