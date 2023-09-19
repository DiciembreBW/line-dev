import Button from "@/components/ui/Button";
import {useAppDispatchContext} from "@/context/app/AppReducer";
import {ListType} from "@/context/app/type";
import {Dialog, DialogActions, DialogContent} from "@mui/material";
import React, {useState} from "react";

type Props = {children: React.ReactNode; list: ListType; itemId: string};

export default function AmontItemUI({children, list, itemId: id}: Props) {
	const dispatch = useAppDispatchContext();
	const [state, setState] = useState<boolean>(false);
	const [amont, setAmont] = useState<string>(JSON.stringify(list.amont));

	function handleOk() {
		// console.log(amont);

		const newamont = parseInt(amont);
		const amontvalue = isNaN(newamont) ? list.amont : newamont;

		dispatch({
			items_lists: {
				type: "set",
				id,
				value: list,
				amont: amontvalue,
			},
		});

		close();
	}

	function open() {
		setState(true);
	}

	function close() {
		setState(false);
	}

	function handleAmont(value: string) {
		setAmont(value);
	}
	return (
		<>
			<div onClick={open} className="cursor-pointer">
				{children}
			</div>
			<Dialog open={state} onClose={close} fullWidth={true}>
				<DialogContent>
					<div className="grid gap-2">
						<div>
							<div className="text-center text-2xl">{list.label}</div>
							<div className="text-xl text-center text-zinc-500">
								<div>รอบอก {list.chest} นิ้ว</div>
								<div>ความยาว {list.length} นิ้ว</div>
							</div>
						</div>
						<input
							type="number"
							className="text-3xl text-center border-b w-full focus:outline-none mt-4"
							value={amont}
							onChange={(e) => handleAmont(e.target.value)}
						/>
					</div>
				</DialogContent>
				<DialogActions className="flex justify-center">
					<Button primary onclick={handleOk}>
						ตกลง
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
