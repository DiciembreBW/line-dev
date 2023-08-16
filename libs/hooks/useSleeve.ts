"use client";
import React, {useState} from "react";
import {SleeveLists, SleeveType} from "../types/sleeve_type";

export default function useSleeve() {
	const [sleeves, setSleeves] = useState<SleeveType[]>(SleeveLists);
	const [sleeve, setSleeve] = useState<SleeveType>();

	function handle(item: SleeveType) {
		setSleeve(item);
	}

	return {handle, sleeves, sleeve};
}
