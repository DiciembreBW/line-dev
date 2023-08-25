"use client";
import {SwipeableDrawer} from "@mui/material";
import React, {useState} from "react";

type Props = {
	children: React.ReactNode;
	isolateKey: string;
	label: React.ReactNode;
	anchor: "bottom" | "top" | "right" | "left";
	state: boolean;
	setState: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Swipe({
	children,
	isolateKey,
	label,
	anchor,
	state,
	setState,
}: Props) {
	function handleSwipe(status: boolean) {
		setState(status);
	}
	return (
		<React.Fragment key={isolateKey}>
			<span onClick={() => handleSwipe(true)}>
				{/* <label /> */}
				{label}
			</span>
			<SwipeableDrawer
				open={state}
				onOpen={() => handleSwipe(true)}
				onClose={() => handleSwipe(false)}
				anchor={anchor}
				disableBackdropTransition={true}>
				{children}
			</SwipeableDrawer>
		</React.Fragment>
	);
}
