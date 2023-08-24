"use client";
import React from "react";
import {CreateReducer} from "../../Context";
import {CollectionActionType, CollectionType} from "./types";

import {Reducer, contextProvider, dispatchProvider} from "./CollectionReducer";

type Props = {children: React.ReactNode; initValue: CollectionType};

export default function ItemProvider({children, initValue}: Props) {
	const {state, dispatch} = CreateReducer<CollectionType, CollectionActionType>(
		Reducer,
		initValue
	);
	return (
		<contextProvider.Provider value={state}>
			<dispatchProvider.Provider value={dispatch}>
				{children}
			</dispatchProvider.Provider>
		</contextProvider.Provider>
	);
}
