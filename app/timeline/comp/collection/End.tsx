import React from "react";
import CreateItemWithIcon from "./CreateItemWithIcon";

type Props = {};

export default function End({}: Props) {
	return (
		<div className="px-4 py-3 sticky bottom-0 bg-zinc-950 flex justify-between">
			<div className="flex gap-3">
				<CreateItemWithIcon />
				<div>ทั้งหมด 24 ตัว</div>
			</div>
			<div className="bg-lime-400 px-3 text-zinc-800 rounded">รวม 24,560 บาท</div>
		</div>
	);
}
