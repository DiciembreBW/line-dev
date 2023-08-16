"use client";
import React from "react";
import ShowText from "../components/showText";
import EditText from "../components/edit";
import Material from "../components/Material";
import Parts from "../components/Parts";
import Neck from "../components/Neck";
import Sleeve from "../components/Sleeve";
import Items from "../components/Items";
import User from "../components/User";
import Link from "next/link";
import Action from "../components/Action";

type Props = {};

export default function CreateOrderPage({}: Props) {
	return (
		<div className="grid grid-cols-1 gap-6">
			<Material />
			<Neck />
			<Sleeve />
			<Items />
			<ShowText />
			<Action />
		</div>
	);
}
