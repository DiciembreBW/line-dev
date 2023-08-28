import {Dialog, DialogActions, DialogContent} from "@mui/material";
import {useState} from "react";

export function DialogUI(
	Content: (text: string) => React.ReactElement,
	Label: (handle: (state: boolean) => void) => React.ReactElement,
	Action: (handle: (state: boolean) => void) => React.ReactElement
) {
	// return <div onClick={() => handle(true)}>{children}</div>;

	return function Callback({
		children,
		text,
	}: {
		children?: React.ReactNode;
		text: string;
	}) {
		const [state, setState] = useState<boolean>(false);
		const [value, setValue] = useState(text);
		function handle(state: boolean) {
			setState(state);
		}

		function handleOnClose(state: boolean) {
			setValue(text);
			setState(false);
		}
		return (
			<>
				{Label(handle)}
				<Dialog open={state} onClose={handleOnClose}>
					{/* {children} */}
					<pre>{JSON.stringify(value, null, 3)}</pre>
					<DialogContent>{Content(value)}</DialogContent>
					<DialogActions>{Action(handle)}</DialogActions>
				</Dialog>
			</>
		);
	};
}
