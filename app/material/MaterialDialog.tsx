"use client";
import {Dialog, DialogContent} from "@mui/material";
import {useState} from "react";

type Props = {
	children: React.ReactNode;
	image: string;
};
export default function MaterialDialog({children}: Props) {
	const [state, setState] = useState<boolean>(false);

	function onOpen() {
		setState(true);
	}
	function onClose() {
		setState(false);
	}
	return (
		<>
			<div onClick={onOpen} className="cursor-pointer">
				{children}
			</div>
			<Dialog open={state} onClose={onClose} fullWidth={true}>
				{/* <DialogContent className="rounded-lg"> */}
				<div
					className="absolute top-2 right-2 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-zinc-300"
					onClick={onClose}>
					x
				</div>
				<div className="w-full ring aspect-square rounded-lg flex justify-center items-center">
					image
				</div>
				{/* </DialogContent> */}
			</Dialog>
		</>
	);
}
