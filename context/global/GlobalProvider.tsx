"use client";

import React from "react";

// type Props = {children: React.ReactNode; init: GlobalType};
type Props = {children: React.ReactNode};
import {Reducer, contextProvider, dispatchProvider} from "./GlobalReducer";
import {CreateReducer} from "../Context";
import {GlobalActionType, GlobalInit, GlobalType} from "./GlobalType";

export default function GlobalProvider({children}: Props) {
	const {state, dispatch} = CreateReducer<GlobalType, GlobalActionType>(
		Reducer,
		// init
		GlobalInit
	);
	return (
		<contextProvider.Provider value={state}>
			<dispatchProvider.Provider value={dispatch}>
				{children}
			</dispatchProvider.Provider>
		</contextProvider.Provider>
	);
}
