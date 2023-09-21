import {useAppDispatchContext} from "@/context/app/AppReducer";
import {materialvalue} from "@/context/app/app.value";
import {MaterialType} from "@/context/app/type";
import {Dialog, DialogContent, DialogTitle} from "@mui/material";
import React, {useEffect, useRef, useState} from "react";

// type Props = {material: MaterialType};
type Props = {id: string; material: MaterialType; children: React.ReactNode};

export default function MaterialUI({id, material, children}: Props) {
	const [open, setOpen] = useState<boolean>(false);
	const dispatch = useAppDispatchContext();
	const {name, description, price} = material;

	function onclose() {
		setOpen(false);
	}
	function onopen() {
		setOpen(true);
	}

	function handleMaterial(material: MaterialType) {
		dispatch({
			material: {
				type: "create",
				id,
				value: material,
			},
		});

		onclose();
	}

	return (
		<>
			{/* {material} */}
			{name == "" && (
				<div
					className="flex justify-center p-6 hover:cursor-pointer"
					onClick={onopen}>
					{children}
				</div>
			)}
			{name !== "" && (
				<div className="px-3 py-2">
					<div className="flex justify-between ">
						<div className="font-bold">{name}</div>
						<div onClick={onopen} className="hover:cursor-pointer hover:bg-zinc-200">
							แก้ไข
						</div>
					</div>
					<div className="">
						<p className="">
							<i>{description}</i>
						</p>
					</div>
				</div>
			)}

			<Dialog open={open} onClose={onclose} fullScreen transitionDuration={0}>
				{/* <div className="px-3 py-2">Material</div> */}
				<DialogTitle className="flex justify-between">
					<div>ชนิดผ้า</div>
					{/* <div>
						<button onClick={onclose}>x</button>
					</div> */}
				</DialogTitle>
				<DialogContent>
					<div className="grid grid-cols-1 gap-2">
						{materialvalue.map((item, index) => (
							<div
								className={`flex gap-2 p-2 border rounded shadow hover:cursor-pointer hover:bg-zinc-200 ${
									item.name == name && "bg-zinc-200"
								}`}
								key={index}
								ref={(ref: HTMLDivElement) => {
									// scroll to active
									if (ref == null) return;
									if (name == item.name)
										return ref.scrollIntoView({behavior: "smooth", block: "center"});
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
					{/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
					similique mollitia autem! Tempore iste aliquam aspernatur illo quo.
					Architecto voluptatum beatae iusto doloremque! Dolorem unde labore aut quos
					dolor assumenda! */}
				</DialogContent>
			</Dialog>
		</>
	);
}
