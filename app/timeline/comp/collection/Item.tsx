"use client";
import React, {useState} from "react";
import {ItemType} from "../../context/collection.context/types";
import {SwipeableDrawer} from "@mui/material";

type Props = {item: ItemType};

export default function Item({item}: Props) {
	return (
		<>
			<div>
				{item.neck.name} {item.sleeve.name}
			</div>
			<div>
				<div>{item.material.name}</div>
				<div>{item.material.description}</div>
			</div>

			<div>
				<Swipe>
					<div className="text-lime-400">Detial</div>
				</Swipe>
			</div>
		</>
	);
}

function Swipe({children}: {children: React.ReactNode}) {
	const [state, setState] = useState<boolean>(false);

	function handleSwipe(state: boolean) {
		setState(state);
	}
	return (
		<>
			<div onClick={() => handleSwipe(true)}>{children}</div>
			<SwipeableDrawer
				open={state}
				onClose={() => handleSwipe(false)}
				onOpen={() => handleSwipe(true)}
				anchor="right"
				sx={{width: 100}}>
				<div className="w-screen"></div>
			</SwipeableDrawer>
		</>
	);
}
