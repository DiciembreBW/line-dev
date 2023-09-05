"use client";
import React from "react";
import {CreateReducer} from "../Context";
import {AppActionType, AppType, init} from "./type";
import {Reducer, contextProvider, dispatchProvider} from "./AppReducer";

type Props = {children: React.ReactNode; value: AppType};

export default function AppProvider({children, value}: Props) {
	const {state, dispatch} = CreateReducer<AppType, AppActionType>(
		Reducer,
		value
	);
	return (
		<contextProvider.Provider value={state}>
			<dispatchProvider.Provider value={dispatch}>
				{children}
			</dispatchProvider.Provider>
		</contextProvider.Provider>
	);
}
