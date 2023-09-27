import React from "react";

type Props = {};

export default function Toolsbar({}: Props) {
	return (
		<div className="p-3 flex justify-center gap-3">
			<div className="ring ring-zinc-400 rounded-lg w-12 aspect-square"></div>
			<div className="ring ring-zinc-400 rounded-lg w-12 aspect-square"></div>
			<div className="ring ring-zinc-400 rounded-lg w-12 aspect-square"></div>
			<div className="ring ring-zinc-400 rounded-lg w-12 aspect-square"></div>
		</div>
	);
}
