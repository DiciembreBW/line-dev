"use client";
import Button from "@/components/ui/Button";
import {useAppContext, useAppDispatchContext} from "@/context/app/AppReducer";
import {materialvalue} from "@/context/app/app.value";
import {ItemType, MaterialType} from "@/context/app/type";
import {Dialog, DialogContent, DialogTitle} from "@mui/material";
import React, {useEffect, useRef, useState} from "react";

// type Props = {id: string; value: MaterialType; children: React.ReactNode};
type Props = {id: string};

export default function Material({id}: Props) {
	const [open, setOpen] = useState<boolean>(false);
	const dispatch = useAppDispatchContext();
	const app = useAppContext();

	const item = app.items.filter((item) => item.id == id);

	// if (item.length > 0)
	const value: MaterialType | null = item.length > 0 ? item[0].material : null;

	function onclose() {
		setOpen(false);
	}
	function onopen() {
		setOpen(true);
	}

	function handleMaterial(value: MaterialType) {
		dispatch({
			material: {
				type: "create",
				id,
				value,
			},
		});

		onclose();
	}

	return (
		// <div>
		// 	<div>{id}</div>
		// 	<pre>{JSON.stringify(value, null, 3)}</pre>
		// </div>
		<>
			{/* {material} */}
			{value?.name == "" && (
				<div
					className="flex justify-center p-6 hover:cursor-pointer"
					onClick={onopen}>
					{/* {children} */}
					กรุณาเลือกเนื้อผ้า
				</div>
			)}

			{/* <pre>{JSON.stringify(value, null, 3)}</pre> */}
			{value !== null && (
				<>
					<div className="px-3 py-2">
						<div className="flex justify-between">
							<div>{value.name}</div>
							<div
								onClick={onopen}
								className="hover:cursor-pointer hover:bg-zinc-200 text-zinc-400">
								เปลี่ยน
							</div>
						</div>
						<div className="text-sm">
							<p className="">{value.description}</p>
						</div>
					</div>

					<Dialog open={open} onClose={onclose} fullScreen transitionDuration={0}>
						<DialogTitle className="flex justify-between">
							<div>ชนิดผ้า</div>
						</DialogTitle>
						<DialogContent>
							<div className="grid grid-cols-1 gap-2 p-2">
								{materialvalue.map((item, index) => (
									<div
										className={`flex gap-2 p-2 border rounded shadow hover:cursor-pointer hover:bg-zinc-200 ${
											item.name == value.name && "bg-zinc-200 ring ring-zinc-400"
										}`}
										key={index}
										ref={(ref: HTMLDivElement) => {
											// scroll to active
											if (ref == null) return;
											if (value.name == item.name)
												return ref.scrollIntoView({behavior: "auto", block: "center"});
										}}
										// onChange={handleScroll}
										onClick={() => handleMaterial(item)}>
										<div className="basis-2/6 rounded aspect-square bg-zinc-100"></div>
										<div className="basis-4/6">
											<div className="text-xl">{item.name}</div>
											<div className="text-xs">{item.description}</div>
										</div>
										{/* <pre>{JSON.stringify(item, null, 3)}</pre> */}
									</div>
								))}
							</div>
						</DialogContent>
					</Dialog>
				</>
			)}
		</>
	);
}
