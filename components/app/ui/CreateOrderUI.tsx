import {useAppContext} from "@/context/app/AppReducer";
import React from "react";
import CreateOrder from "../Action/CreateOrder";

type Props = {};

export default function CreateOrderUI({}: Props) {
	const app = useAppContext();
	const {init} = app;

	if (init == false) {
		return <CreateOrder />;
	}
}
