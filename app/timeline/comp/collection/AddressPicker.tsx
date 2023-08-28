"use client";
import {DialogUI} from "@/libs/utilities/MUI";
import {Dialog, DialogActions, DialogContent} from "@mui/material";
import React, {useState} from "react";
import {
	useCollectionContext,
	useCollectionDispatchContext,
} from "../../context/collection.context/CollectionReducer";

type Props = {};

export default function AddressPicker({}: Props) {
	const app = useCollectionContext();
	const dispatch = useCollectionDispatchContext();

	const [state, setState] = useState<boolean>(false);
	const [address, setAddress] = useState<string>(app.address);

	function handleDialog(state: boolean) {
		setState(state);
	}

	function onchange(value: string) {
		setAddress(value);
	}

	function handleOnclose(state: boolean) {
		// console.log(app.address);
		// console.log(address);
		if (app.address !== address) {
			setAddress(app.address);
		}
		setState(false);
	}

	function handleOnSubmit() {
		dispatch({
			address: {
				type: "onchange",
				value: address,
			},
		});

		setState(false);
	}
	return (
		<div className="px-3 py-2 grid grid-cols-9">
			<div className="col-span-1">
				{/* <Place /> */}
				{/* <Modal> worde </Modal> */}X
			</div>

			<div className="col-span-8">
				<div className="flex justify-between">
					<div>จัดส่ง</div>
					<div className="text-lime-400" onClick={() => handleDialog(true)}>
						เปลี่ยน
					</div>
					<Dialog open={state} onClose={handleOnclose}>
						{/* dawdadj akdj */}
						<DialogContent className="">
							<textarea
								placeholder="address"
								value={address}
								onChange={(e) => onchange(e.target.value)}
								className="border focus:outline-none p-1 h-32"
							/>
						</DialogContent>
						<DialogActions className="">
							<div className="w-full flex justify-center">
								<button
									className="px-3 py-2 border bg-lime-400 rounded"
									onClick={handleOnSubmit}>
									บันทึก
								</button>
							</div>
						</DialogActions>
					</Dialog>
					{/* <Address text={app.address} /> */}
				</div>
				<div className="text-sm text-zinc-600">
					{/* 330 ถ.เชียงใหม่-ลำปาง ต.ป่าตัน อ.เมือง รหัสไปรษณีย์ 50300 โทร.086-1651345 */}

					{app.address}
				</div>
			</div>
		</div>
	);
}

const Address = DialogUI(AddressInput, AddressOnClick, AddressOnSubmit);

function AddressInput(text: string) {
	const [state, setState] = useState<string>(text);
	const dispatch = useCollectionDispatchContext();
	function onchange(value: string) {
		setState(value);
		dispatch({
			address: {
				type: "onchange",
				value: state,
			},
		});
	}
	return (
		<>
			<textarea
				placeholder="address"
				value={state}
				onChange={(e) => onchange(e.target.value)}
				className="border focus:outline-none p-3"
			/>
		</>
	);
}

function AddressOnClick(handle: (status: boolean) => void) {
	return (
		<span
			onClick={() => handle(true)}
			className="hover:cursor-pointer text-lime-400">
			เปลี่ยน
		</span>
	);
}

function AddressOnSubmit(handle: (state: boolean) => void) {
	const dispatch = useCollectionDispatchContext();
	function onSubmit() {
		// console.log("submmit");
		dispatch({
			address: {
				type: "onchange",
				value: "adadasda",
			},
		});
		handle(false);
	}
	return (
		<div className="w-full flex justify-center">
			<div className="bg-lime-400 rounded">
				<button className="px-3 py-2" onClick={onSubmit}>
					ยืนยัน
				</button>
			</div>
		</div>
	);
}
