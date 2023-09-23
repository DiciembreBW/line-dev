import Button from "@/components/ui/Button";
import {useAppDispatchContext} from "@/context/app/AppReducer";
import {neckvalue, sleevevalue} from "@/context/app/app.value";
import {ItemType, ListType} from "@/context/app/type";
import {Dialog, DialogActions} from "@mui/material";
import React, {useState} from "react";

import Random from "@/libs/utilities/Random";

type Props = {children: React.ReactNode};

export default function CreateDialog({children}: Props) {
	// state
	const [state, setState] = useState<boolean>(false);

	// inital template
	const {TeeShirtTemplate, PoloShirtTemplate} = Create(closeDialog);

	// close dialog
	function openDialog() {
		setState(true);
	}

	function closeDialog() {
		setState(false);
	}

	return (
		<>
			<div
				onClick={openDialog}
				className="cursor-pointer w-12 h-12 rounded-full flex justify-center items-center bg-zinc-900 text-zinc-200
        hover:shadow-lg">
				{children}
			</div>

			<Dialog open={state} onClose={closeDialog} fullScreen transitionDuration={0}>
				<div className="grid gap-2 p-2">
					<div
						className="flex justify-between gap-3 border rounded p-1"
						onClick={() => {
							TeeShirtTemplate({necklabel: "คอกลม", sleevelabel: "แขนสั้น"});
						}}>
						<div className="basis-3/6 aspect-square bg-zinc-200 rounded flex justify-center items-center">
							img
						</div>
						<div className="basis-full bg-zinc-100 p-2 rounded-lg px-3 py-2">
							เสื้อคอกลมแขนสั้น
						</div>
					</div>

					<div
						className="flex justify-between gap-3 border rounded p-1"
						onClick={() => {
							PoloShirtTemplate({necklabel: "คอกลม", sleevelabel: "แขนยาว"});
						}}>
						<div className="basis-3/6 aspect-square bg-zinc-200 rounded flex justify-center items-center">
							img
						</div>
						<div className="basis-full bg-zinc-100 p-2 rounded-lg px-3 py-2">
							เสื้อโปโลแขนสั้น
						</div>
					</div>
				</div>
				<DialogActions>
					<div className="flex justify-center w-full">
						<Button primary onclick={closeDialog}>
							ปิด
						</Button>
					</div>
				</DialogActions>
			</Dialog>
		</>
	);
}

function Create(closeDialog: () => void) {
	const distpatch = useAppDispatchContext();

	// inital value

	const value: ItemType = {
		id: Random.id(),
		conter: 0,
		lists: [],
		material: {
			name: "",
			description: "",
			price: 0,
		},
		neck: {name: "", price: 0},
		sleeve: {name: "", price: 0},
	};
	return {
		// tee shirt
		TeeShirtTemplate: ({
			necklabel,
			sleevelabel,
		}: {
			necklabel: string;
			sleevelabel: string;
		}) => {
			const neck = neckvalue.filter((item) => item.name == necklabel)[0];
			const sleeve = sleevevalue.filter((item) => item.name == sleevelabel)[0];

			const lists: ListType[] = [
				{label: "XXS", chest: 32, length: 28, addOn: 0, amont: 0},
				{label: "XS", chest: 34, length: 30, addOn: 0, amont: 0},
				{label: "S", chest: 36, length: 30, addOn: 0, amont: 0},
				{label: "M", chest: 38, length: 32, addOn: 0, amont: 0},
				{label: "L", chest: 40, length: 34, addOn: 0, amont: 0},
				{label: "XL", chest: 42, length: 36, addOn: 0, amont: 0},
				{label: "2XL", chest: 44, length: 38, addOn: 0, amont: 0},
				{label: "3XL", chest: 46, length: 40, addOn: 20, amont: 0},
				{label: "4XL", chest: 48, length: 40, addOn: 20, amont: 0},
				{label: "5XL", chest: 50, length: 42, addOn: 30, amont: 0},
				{label: "6XL", chest: 52, length: 46, addOn: 30, amont: 0},
			];
			distpatch({items: {type: "create", value: {...value, lists, neck, sleeve}}});
			closeDialog();
		},

		// polo shirt
		PoloShirtTemplate: ({
			necklabel,
			sleevelabel,
		}: {
			necklabel: string;
			sleevelabel: string;
		}) => {
			const neck = neckvalue.filter((item) => item.name == necklabel)[0];
			const sleeve = sleevevalue.filter((item) => item.name == sleevelabel)[0];
			const lists: ListType[] = [
				{label: "XXS", chest: 32, length: 28, addOn: 0, amont: 0},
				{label: "XS", chest: 34, length: 30, addOn: 0, amont: 0},
				{label: "S", chest: 36, length: 34, addOn: 0, amont: 0},
				{label: "M", chest: 38, length: 34, addOn: 0, amont: 0},
				{label: "L", chest: 40, length: 34, addOn: 0, amont: 0},
				{label: "XL", chest: 42, length: 36, addOn: 0, amont: 0},
				{label: "2XL", chest: 44, length: 38, addOn: 0, amont: 0},
				{label: "3XL", chest: 46, length: 40, addOn: 20, amont: 0},
				{label: "4XL", chest: 48, length: 42, addOn: 20, amont: 0},
				{label: "5XL", chest: 50, length: 44, addOn: 30, amont: 0},
				{label: "6XL", chest: 52, length: 46, addOn: 30, amont: 0},
			];
			distpatch({items: {type: "create", value: {...value, lists, neck, sleeve}}});
			closeDialog();
		},
	};
}
