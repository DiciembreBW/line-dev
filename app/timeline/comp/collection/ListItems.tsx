"use client";
import React from "react";
import SwipeItem from "./SwipeItem";
import {useCollectionContext} from "../../context/collection.context/CollectionReducer";

type Props = {};

export default function ListItems({}: Props) {
	const collection = useCollectionContext();
	return (
		<div className="grid grid-cols-1 gap-3">
			{collection.items.map((item, index) => (
				<SwipeItem key={index} item={item} />
			))}
		</div>
	);
}
