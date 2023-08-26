"use client";
import {SwipeableDrawer} from "@mui/material";
import React, {useState} from "react";
import {useCollectionDispatchContext} from "../../context/collection.context/CollectionReducer";
import useSwipe from "@/libs/hooks/useSwipe";

type Props = {};

function Swipe2({children}: {children: React.ReactNode}) {
	const [state, setState] = useState<boolean>(false);
	function handle(state: boolean) {
		setState(state);
	}

	return (
		<div>
			<div className="px-3 py-2 border" onClick={() => handle(true)}>
				X
			</div>
			<SwipeableDrawer
				anchor="left"
				open={state}
				onOpen={() => handle(true)}
				onClose={() => handle(false)}>
				{/* {children} */}
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tenetur
				deleniti praesentium nam quo corporis voluptatum, optio exercitationem
				quibusdam, fugiat at ut quos architecto quae iure beatae officia dolores
				suscipit.
			</SwipeableDrawer>
		</div>
	);
}

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
