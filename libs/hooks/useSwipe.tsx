import {SwipeableDrawer} from "@mui/material";
import React, {useState} from "react";

type Props = {
	children: React.ReactNode;
	// isolateKey: string;
	// label: React.ReactNode;
	anchor: "bottom" | "top" | "right" | "left";
	// state: boolean;
	// setState: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function useSwipe() {
	// return <div>useSwipe</div>;
	const [state, setState] = useState<boolean>(false);
	function handleSwipe(status: boolean) {
		setState(status);
	}
	function Swipe({children, anchor}: Props) {
		return (
			<SwipeableDrawer
				open={state}
				onOpen={() => handleSwipe(true)}
				onClose={() => handleSwipe(false)}
				anchor={anchor}
				disableSwipeToOpen={true}>
				{children}
			</SwipeableDrawer>
		);
	}

	return {handleSwipe, Swipe};
}
