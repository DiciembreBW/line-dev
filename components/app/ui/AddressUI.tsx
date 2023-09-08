"use client";
import {useAppContext, useAppDispatchContext} from "@/context/app/AppReducer";
import {Dialog} from "@mui/material";
import {useState} from "react";
type Props = {
	children: React.ReactNode;
	Content: (onclose: () => void) => React.ReactNode;
};

export default function AddressUI() {
	const app = useAppContext();
	const {address} = app;

	return (
		<>
			{/* <pre>{JSON.stringify(app, null, 3)}</pre> */}
			<div className="p-2 border rounded-lg shadow flex gap-2 justify-between">
				{/* <div>dadas</div> */}
				<div className="px-3 py-2">
					<div>ที่อยู่</div>
					<p className="text-sm">{address}</p>
				</div>
				<div>
					<Address Content={AddressContent}>เปลี่ยน</Address>
				</div>
			</div>
		</>
	);
}

function AddressContent(onclose: () => void) {
	const app = useAppContext();
	const dispatch = useAppDispatchContext();
	const [value, setValue] = useState<string>(app.address);

	function handleEnter() {
		// console.log(value);

		dispatch({
			app: {
				type: "update",
				value: {...app, address: value},
			},
		});

		onclose();
	}

	return (
		<div>
			{/* <input type="text" /> */}
			<div>ที่อยู่</div>
			{/* <div className="px-3 py-2"> */}
			<textarea
				className="w-full border focus:outline-none resize-none p-2"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			{/* </div> */}

			<div className="flex justify-center">
				<div className="m-1">
					<button className="px-3 py-2 border rounded" onClick={handleEnter}>
						ตกลง
					</button>
				</div>

				<div className="m-1">
					<button className="px-3 py-2 border rounded" onClick={onclose}>
						ปิด
					</button>
				</div>
			</div>
		</div>
	);
}

function Address({children, Content}: Props) {
	const [state, setState] = useState<boolean>(false);
	function open() {
		setState(true);
	}

	function onclose() {
		setState(false);
	}
	return (
		<>
			<div onClick={open} className=" hover:cursor-pointer hover:bg-zinc-200">
				{children}
			</div>
			<Dialog
				open={state}
				onClose={() => setState(false)}
				fullWidth
				transitionDuration={0}>
				<div className="px-5 py-4">{Content(onclose)}</div>
			</Dialog>
		</>
	);
}
