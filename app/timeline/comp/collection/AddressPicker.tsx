import {Place} from "@mui/icons-material";
import React from "react";

type Props = {};

export default function AddressPicker({}: Props) {
	return (
		<div className="px-3 py-2 grid grid-cols-9">
			<div className="col-span-1">{/* <Place /> */}X</div>
			<div className="col-span-8">
				<div>จัดส่ง</div>
				<div className="text-sm text-zinc-600">
					330 ถ.เชียงใหม่-ลำปาง ต.ป่าตัน อ.เมือง รหัสไปรษณีย์ 50300 โทร.086-1651345
				</div>
			</div>
		</div>
	);
}
