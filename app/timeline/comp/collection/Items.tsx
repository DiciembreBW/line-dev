"use client";
import React, {useState} from "react";
import {
	useCollectionContext,
	useCollectionDispatchContext,
} from "../../context/collection.context/CollectionReducer";

import {Dialog, Divider} from "@mui/material";
import Link from "next/link";
import ItemDetial from "./ItemDetial";
import WorkTimeline from "./WorkTimeline";
import {
	MaterialType,
	materialValue,
} from "../../context/collection.context/types";
import MaterialUI from "./MaterialUI";
import Item from "./Item";

type Props = {};

export default function Items({}: Props) {
	const collection = useCollectionContext();

	return (
		<div className="grid grid-cols-1 gap-2 text-sm text-zinc-400 mt-3">
			{collection.items.map((item, index) => (
				<div className="rounded-lg px-3 py-2 bg-zinc-800/50 " key={index}>
					<Item item={item} />
					{/* <div className="mb-2 grid grid-cols-9 gap-3">
						<div className="col-span-4">
							<ImageUI />
						</div>
						<div className="col-span-5">
							<TitleUI neck={item.neck.name} sleeve={item.sleeve.name} />
							<MaterialUI material={item.material} indexOfItem={index} />
						</div>
					</div>

					<PriceAndAmontUI />
					<ItemDetial /> */}
				</div>
			))}
		</div>
	);
}

function ImageUI() {
	return (
		<div className="aspect-square rounded-lg bg-zinc-800 flex justify-center items-center">
			image
		</div>
	);
}

function TitleUI({neck, sleeve}: {neck: string; sleeve: string}) {
	return (
		<div className="flex py-1 justify-between">
			<div className="text-base text-neutral-300">
				{neck} {sleeve}
			</div>
		</div>
	);
}

function PriceAndAmontUI() {
	return (
		<>
			<div className="flex justify-between py-1">
				<div>จำนวน</div>
				<div>ตัว</div>
			</div>

			<div className="flex justify-between py-1">
				<div>ราคา</div>
				<div>12,254 บาท</div>
			</div>
		</>
	);
}
