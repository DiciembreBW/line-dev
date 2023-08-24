import React from "react";

type Props = {};

export default function page({}: Props) {
	return (
		<div className="bg-zinc-300 h-screen">
			<div className="flex justify-center text-xl">Design</div>
			<div className="grid grid-cols-1">
				{/* Wrapper */}
				<div className="flex px-3 py-2 justify-between">
					<div>Wrapper</div>
					<div>px-3 py-2 m-1</div>
				</div>

				{/* background */}
				<div className="flex px-3 py-2 justify-between">
					<div>Background</div>
					<div className="bg-zinc-900 text-zinc-300">bg-zinc-900</div>
				</div>

				{/* background */}
				<div className="flex px-3 py-2 justify-between">
					<div>Background - 2</div>
					<div className="bg-zinc-800/50 text-zinc-300">bg-zinc-800/50</div>
				</div>

				{/* text */}
				<div className="flex px-3 py-2 justify-between">
					<div>Text</div>
					<div className="bg-zinc-900 text-zinc-300">text-zinc-300</div>
				</div>

				{/* Element */}
				<div className="flex px-3 py-2 justify-between">
					<div>Element</div>
					<div className="m-1 border">children</div>
				</div>

				<div className="flex px-3 py-2 justify-between bg-zinc-800 text-lime-400">
					<div>Color</div>
					<div>text-lime-400</div>
				</div>
			</div>
		</div>
	);
}
