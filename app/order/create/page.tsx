"use client";
import React from "react";
import Material from "../components/Material";
import Neck from "../components/Neck";
import Sleeve from "../components/Sleeve";
import Items from "../components/Items";
import OrderDebug from "../components/OrderDebug";
import Model3D from "../components/Model3D";
import Drawer from "../components/Drawer";
import TotalPrice from "../components/TotalPrice";

type Props = {};

export default function CreateOrderPage({}: Props) {
	return (
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
				<TotalPrice />
			</div>

			<div>{/* <OrderDebug /> */}</div>
			{/* <Material />
			<Neck />
			<Sleeve />
			<OrderDebug />
			<Items /> */}
			{/* <ShowText /> */}
			{/* <Action /> */}
		</div>
	);
}
