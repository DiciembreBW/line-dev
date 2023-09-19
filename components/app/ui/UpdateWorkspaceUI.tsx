import {useAppContext} from "@/context/app/AppReducer";
import {useGlobalContext} from "@/context/global/GlobalReducer";
import SnackUi from "@/ultils/mui/SnackUi";
import CallAPI from "@/ultils/workspace-call-api";
import {useRouter} from "next/navigation";
import React from "react";

type Props = {};

export default function UpdateWorkspaceUI({}: Props) {
	const global = useGlobalContext();
	const app = useAppContext();
	const rounter = useRouter();
	function onsave() {
		CallAPI.updateItem({...app, user: global.user});
		// rounter.refresh();
	}
	return (
		<div className="px-3 py-2 flex justify-center">
			<div className="m-1">
				<button className="px-3 py-2" onClick={onsave}>
					<SnackUi message="สำเร็จ">บันทึก</SnackUi>
				</button>
			</div>
		</div>
	);
}
