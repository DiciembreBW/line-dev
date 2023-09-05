"use client";
import React from "react";
import Pre from "./Pre";
import {useCollectionContext} from "../../context/collection.context/CollectionReducer";

type Props = {};

export default function Preview({}: Props) {
	const collection = useCollectionContext();
	return <Pre item={collection.items} />;
}
