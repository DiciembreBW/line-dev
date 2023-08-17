import {SwipeableDrawer} from "@mui/material";
import React, {useState} from "react";
import Neck from "./Neck";
import Sleeve from "./Sleeve";
import {useOrderContext} from "@/libs/contexts/order.context/OrderContext";
// import {Edit} from "@mui/icons-material";
import Items from "./Items";
import ShowText from "./showText";

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
			<div
				className="hover:cursor-pointer hover:bg-neutral-100 px-3 py-2"
				onClick={() => toggleDrawer("bottom", true)}>
				{/* <Edit fontSize="medium" /> */}x
			</div>

			<SwipeableDrawer
				anchor="bottom"
				open={state["bottom"]}
				onClose={() => toggleDrawer("bottom", false)}
				onOpen={() => toggleDrawer("bottom", true)}
				className="">
				<div className="px-3 py-2 grid grid-cols-1 gap-3">
					<Neck />
					<Sleeve />
					<Items />
					{/* <ShowText /> */}
				</div>

				<div className="sticky px-3 py-2 bottom-0 bg-lime-400">
					<div className="flex justify-center items-center">
						<div className="p-1">
							<button
								onClick={() => toggleDrawer("bottom", false)}
								className="px-3 py-2 border rounded border-neutral-800">
								x
							</button>
						</div>
					</div>
				</div>
			</SwipeableDrawer>
		</React.Fragment>
	);
}
