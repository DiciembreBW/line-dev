"use client";
import Button from "@/components/ui/Button";
import {Framer} from "@/libs/framer/framer";
import Random from "@/libs/utilities/Random";
import React, {useState} from "react";

type Props = {};

export default function Test2Page({}: Props) {
	const [lists, setLists] = useState<{id: string; name: string}[]>([
		{id: "1", name: "woradet"},
		{id: "2", name: "boonsutat"},
		{id: "3", name: "thailand"},
	]);
	const [isId, setIsId] = useState<{id: string; name: string} | null>(null);

	function setId(item: {id: string; name: string}) {
		setIsId(item);
	}
	return (
		<div className="px-3 py-2">
			{lists.map((item) => (
				<Framer.Animate2 key={item.id}>
					<div onClick={() => setId(item)}>
						{item.id} | {item.name}
					</div>
				</Framer.Animate2>
			))}

			<Framer.AnimatePresence>
				<div className="absolute z-40 top-2 left-0 bg-zinc-50 h-full">
					{isId?.id && (
						<Framer.Animate2>
							<div className="flex justify-between px-3 py-2">
								<div>
									{isId.id} | {isId.name}
								</div>
								{/* <div>x</div> */}
								<Button onclick={() => setIsId(null)}>x</Button>
							</div>
						</Framer.Animate2>
					)}
				</div>
			</Framer.AnimatePresence>

			{/* <div className="ring w-full rounded-lg aspect-square"></div> */}
		</div>
	);
}
