import {NeckType, SleeveType} from "@/context/app/type";
import React from "react";
import MenuListItem from "../../MenuListItem";

type Props = {neck: NeckType; sleeve: SleeveType};

export default function TitleItem({neck, sleeve}: Props) {
	return (
		<div className="text-xl font-semibold">
			{neck.name}
			{sleeve.name}
		</div>
	);
}
