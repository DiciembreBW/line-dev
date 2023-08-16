"use client";
import React, {useEffect, useReducer, useState} from "react";
import {AppContext, AppDispatchContext} from "./AppContext";
import {AppReducer, AppType} from "./AppReducer";

type Props = {children: React.ReactNode; value: AppType};

export default function AppProvider({children, value}: Props) {
	const [state, dispatch] = useReducer(AppReducer, value);

	return (
		<AppContext.Provider value={state}>
			<AppDispatchContext.Provider value={dispatch}>
				{children}
			</AppDispatchContext.Provider>
		</AppContext.Provider>
	);
}
