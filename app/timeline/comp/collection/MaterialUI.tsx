"use client";
import React, {useState} from "react";
import {
	MaterialType,
	materialValue,
} from "../../context/collection.context/types";
import {useCollectionDispatchContext} from "../../context/collection.context/CollectionReducer";
import {Dialog} from "@mui/material";

type Props = {};
export default function MaterialUI({
	material,
	indexOfItem,
}: {
	material: MaterialType;
	indexOfItem?: number;
}) {
	const [state, setState] = useState(false);
	const dispatch = useCollectionDispatchContext();

	function handleDialog(state: boolean) {
		setState(state);
	}

	function updateMaterial(value: MaterialType) {
		// if (indexOfItem) {
		if (indexOfItem == undefined) return;
		dispatch({
			material: {
				type: "update",
				index: indexOfItem,
				value,
			},
		});

		handleDialog(false);
		// }
	}
	return (
		<div className="py-1 flex justify-between basis-4">
			<div className="basis-full">
				<div className="flex justify-between">
					<div>
						{material.name}
						<div>{material.description}</div>
					</div>
					<div className="text-lime-400">
						<div onClick={() => handleDialog(true)}>Edit</div>
						<Dialog open={state} onClose={() => handleDialog(false)} fullScreen>
							<div className="p-3 grid grid-cols-1 ">
								{materialValue.map((item, index) => (
									<div
										key={index}
										onClick={() => updateMaterial(item)}
										className="border-b last:border-none px-3 py-2 flex justify-between gap-2">
										<div className="basis-10/12">
											<div className="text-lg font-bold">
												{item.name} {index}
											</div>
											<div>{item.description}</div>
										</div>

										{material ? (
											<div className="basis-2/12 flex justify-end">
												{material.name == item.name ? (
													<div className="font-bold">/</div>
												) : (
													<>0</>
												)}
											</div>
										) : (
											<div className="basis-2/12 flex justify-end">o</div>
										)}
									</div>
								))}
							</div>
						</Dialog>
					</div>
				</div>
			</div>
		</div>
	);
}
