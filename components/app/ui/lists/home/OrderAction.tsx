import {useAppContext} from "@/context/app/AppReducer";
import React from "react";
import UpdateWorkspaceUI from "../../UpdateWorkspaceUI";
import CreateOrder from "@/components/app/Action/CreateOrder";
import {Framer} from "@/libs/framer/framer";

type Props = {};

export default function OrderAction({}: Props) {
	const app = useAppContext();
	const {init} = app;

	if (init == false) {
		return <CreateOrder />;
	}

	return <UpdateWorkspaceUI />;
}
