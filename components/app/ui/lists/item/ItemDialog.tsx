import Button from "@/components/ui/Button";
import {Framer} from "@/libs/framer/framer";
import {Dialog, DialogContent} from "@mui/material";
import React, {useState} from "react";

type Props = {children: React.ReactNode};

export default function ItemDialog({children}: Props) {
	const [state, setState] = useState<boolean>(false);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [event, setEvent] = useState<null | React.MouseEvent<HTMLButtonElement>>(
		null
	);
	//  handle
	function closeDialog() {
		setState(false);
	}

	function openDialog(event: React.MouseEvent<HTMLButtonElement>) {
		setAnchorEl(event.currentTarget);
		// console.log(event.clientX);
		console.log(event.clientX, event.clientY);

		setEvent(event);
		setState(true);
	}
	return (
		<>
			<button onClick={openDialog} className="cursor-pointer">
				{children}
			</button>

			<Dialog
				open={state}
				onClose={closeDialog}
				transitionDuration={0}
				hideBackdrop={true}
				PaperProps={{sx: {backgroundColor: "transparent", boxShadow: "none"}}}
				fullScreen>
				<DialogContent>
					<div className="grid content-center items-center h-full">
						{state && (
							<Framer.AnimatePresence>
								<Framer.AnimatePop event={event}>
									{/* <pre>{JSON.stringify(anchorEl, null, 3)}</pre> */}
									<div className="p-8 flex items-center justify-center">
										<div className="ring bg-zinc-50 h-96 w-1/2">
											xxxxx
											<Button onclick={closeDialog}>X</Button>
										</div>
									</div>
								</Framer.AnimatePop>
							</Framer.AnimatePresence>
						)}
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
}
