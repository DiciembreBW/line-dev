"use client";
import React from "react";
import SwipeItem from "./SwipeItem";
import {useCollectionContext} from "../../context/collection.context/CollectionReducer";

type Props = {};

export default function ListItems({}: Props) {
	const collection = useCollectionContext();
	return (
		<div className="grid grid-cols-1 px-3 py-2 bg-zinc-200/50 rounded-2xl">
			{collection.items.map((item, index) => (
				<SwipeItem key={index} item={item} />
			))}
		</div>
	);
}
