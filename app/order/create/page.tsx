"use client";
import React from "react";
import Material from "../components/Material";
import Model3D from "../components/Model3D";
import Drawer from "../components/Drawer";
import End from "../components/End";
import usePrice from "@/libs/hooks/usePrice";
import OrderProvider from "@/libs/contexts/order.context/OrderProvider";
import {OrderType, intial_order_value} from "@/libs/types/order_type";

type Props = {};

const order: OrderType = intial_order_value;
export default function CreateOrderPage({}: Props) {
	usePrice(); // update price
	return (
		<OrderProvider order={order}>
			<div className="grid grid-cols-1 gap-3">
				<div className="">
					<Model3D />
				</div>

				<div className="flex px-3 py-2 justify-between items-center">
					<Drawer />
				</div>

				<div className="px-3 py-2">
					<Material />
				</div>

				<div className="px-3 py-2">
					<End />
				</div>
			</div>
		</OrderProvider>
	);
}
