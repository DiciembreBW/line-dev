"use client";
import React from "react";
import {
	useCollectionContext,
	useCollectionDispatchContext,
} from "../../context/collection.context/CollectionReducer";

type Props = {item?: any};

export default function Pre({item}: Props) {
	//  const useCollectionDispatchContext()
	const collections = useCollectionContext();
	return (
		<div>
			<pre>{JSON.stringify(item || collections, null, 3)}</pre>
		</div>
	);
}
