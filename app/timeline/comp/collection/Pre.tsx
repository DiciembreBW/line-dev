"use client";
import React from "react";
import {
	useCollectionContext,
	useCollectionDispatchContext,
} from "../../context/collection.context/CollectionReducer";

type Props = {};

export default function PreCollection({}: Props) {
	//  const useCollectionDispatchContext()
	const collections = useCollectionContext();
	return (
		<div>
			<pre>{JSON.stringify(collections, null, 3)}</pre>
		</div>
	);
}
