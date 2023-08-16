"use client";
import React, {useEffect, useState} from "react";
import {NeckLists, NeckType} from "../types/neck_type";

export default function useNeck() {
	const [necks, setNecks] = useState<NeckType[]>(NeckLists);
	const [neck, setNeck] = useState<NeckType>();

	function handle(item: NeckType) {
		setNeck(item);
	}

	return {handle, necks, neck};
}
