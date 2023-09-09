"use client";
import {Snackbar} from "@mui/material";
import React, {useState} from "react";

type Props = {children: React.ReactNode; message: string};

export default function SnackUi({children, message}: Props) {
	const [open, setOpen] = useState<boolean>(false);
	function handleOpen() {
		setOpen(true);
	}

	function handleClose() {
		setOpen(false);
	}

	const action = <React.Fragment>frag</React.Fragment>;

	return (
		<div>
			<div onClick={handleOpen}>{children}</div>
			<Snackbar
				open={open}
				onClose={handleClose}
				autoHideDuration={1200}
				message={message}
			/>
		</div>
	);
}
