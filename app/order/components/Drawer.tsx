import {SwipeableDrawer} from "@mui/material";
import React, {useState} from "react";
import Neck from "./Neck";
import Sleeve from "./Sleeve";
import {useOrderContext} from "@/libs/contexts/order.context/OrderContext";
import {Edit} from "@mui/icons-material";

type Props = {};

export default function Drawer({}: Props) {
	const order = useOrderContext();
	const [state, setState] = useState({
		top: false,
		bottom: false,
		left: false,
		right: false,
	});

	function toggleDrawer(
		achor: "top" | "left" | "right" | "bottom",
		status: boolean
	) {
		setState({...state, [achor]: status});
	}

	return (
		<React.Fragment key={"bottom"}>
			<div className="text-3xl font-bold">
				{/* {order.neck.name == "" && "เลือกแบบเสื้อ"} */}
				{order.neck.name} {order.sleeve.name}
			</div>
			<div className="" onClick={() => toggleDrawer("bottom", true)}>
				<Edit fontSize="medium" />
			</div>

			<SwipeableDrawer
				anchor="bottom"
				open={state["bottom"]}
				onClose={() => toggleDrawer("bottom", false)}
				onOpen={() => toggleDrawer("bottom", true)}
				className="">
				<div className="px-3 py-2">
					<Neck />
					<Sleeve />
				</div>
			</SwipeableDrawer>
		</React.Fragment>
	);
}
