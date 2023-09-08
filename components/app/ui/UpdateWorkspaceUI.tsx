import {useAppContext} from "@/context/app/AppReducer";
import CallAPI from "@/ultils/workspace-call-api";
import {useRouter} from "next/navigation";
import React from "react";

type Props = {};

export default function UpdateWorkspaceUI({}: Props) {
	const app = useAppContext();
	const rounter = useRouter();
	function onsave() {
		// console.log("save");
		CallAPI.updateItem(app);
		rounter.refresh();
	}
	return (
		<div className="px-3 py-2 flex justify-center">
			<div className="m-1">
				<button className="px-3 py-2 rounded border" onClick={onsave}>
					บันทึก
				</button>
			</div>
		</div>
	);
}
