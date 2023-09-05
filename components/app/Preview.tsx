"use client";
import {Dialog} from "@mui/material";
import {useState} from "react";
type Props = {
	children: React.ReactNode;
	Content: React.ReactNode;
};

export default function Preview({children, Content}: Props) {
	const [state, setState] = useState<boolean>(false);
	function open() {
		setState(true);
	}

	function close() {
		setState(false);
	}
	return (
		<>
			<div onClick={open}>{children}</div>
			<Dialog
				open={state}
				onClose={() => setState(false)}
				fullScreen={true}
				transitionDuration={0}>
				<div className="flex justify-between px-3 py-2">
					<div className="">{`<-`}</div>
					<div className="hover:cursor-pointer" onClick={close}>
						x
					</div>
				</div>
				{Content}
			</Dialog>
		</>
	);
}
