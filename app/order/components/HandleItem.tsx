import {SwipeableDrawer} from "@mui/material";
import React, {useState} from "react";
import Items from "./Items";

type Props = {children: React.ReactNode};

export default function HandleItem({children}: Props) {
	const [state, setState] = useState<{bottom: boolean}>({bottom: false});
	function handle(status: boolean) {
		setState({bottom: status});
	}
	return (
		<>
			<React.Fragment key={"bottom"}>
				<span onClick={() => handle(true)}>{children}</span>
				<SwipeableDrawer
					anchor="bottom"
					open={state.bottom}
					onClose={() => handle(false)}
					onOpen={() => handle(true)}>
					{/* <div className="px-3 py-2">
					</div> */}
					<div className="flex justify-end px-3 py-2">
						<div className="p-1">
							<button onClick={() => handle(false)}>x</button>
						</div>
					</div>
					<Items />
				</SwipeableDrawer>
			</React.Fragment>
		</>
	);
}
