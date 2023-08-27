"use client";
import React from "react";
import {useCollectionContext} from "../../context/collection.context/CollectionReducer";

import {Divider} from "@mui/material";
import Link from "next/link";
import ItemDetial from "./ItemDetial";
import WorkTimeline from "./WorkTimeline";

type Props = {};

export default function Items({}: Props) {
	const collections = useCollectionContext();

	return (
		// <div className=" text-sm text-zinc-400">
		<div className="grid grid-cols-1 gap-2 text-sm text-zinc-400 mt-3">
			{collections.item.map((item, index) => (
				<div className="rounded-lg px-3 py-2 bg-zinc-800/50" key={index}>
					<div className="flex gap-3 mb-2">
						<div className="basis-3/4 aspect-square rounded-lg bg-zinc-800 flex justify-center items-center">
							image
						</div>
						<div>
							<div className="flex py-1 justify-between">
								<div className="text-base text-neutral-300">
									{item.neck.name} {item.sleeve.name}
								</div>
								{/* <div>0</div> */}
							</div>
							<div className="py-1 flex justify-between">
								<div className="basis-auto">
									<div>ผ้า Dry-tech</div>
									<div className="text-sm">
										Lorem ipsum dolor sit amet consectetur adipisicing.
									</div>
								</div>
								{/* <div className="shrink-0 basis-2/6 flex justify-end">0</div> */}
							</div>
						</div>
					</div>

					<div className="flex justify-between py-1">
						<div>จำนวน</div>
						<div>{item.amont} ตัว</div>
					</div>

					<div className="flex justify-between py-1">
						<div>ราคา</div>
						<div>12,254 บาท</div>
					</div>

					<div className="flex justify-center py-1">
						<ItemDetial />
					</div>
				</div>
			))}
		</div>
		// </div>
	);
}
