// 'use client'
import React from "react";

type Props = {children: React.ReactNode; onclick: Function};
export function Primary({children, onclick}: Props) {
	return (
		<div className="p-1">
			<button
				className="px-3 py-2 select-none rounded shadow bg-lime-400"
				onClick={() => onclick()}>
				{children}
			</button>
		</div>
	);
}

export function Secondary({children, onclick}: Props) {
	return (
		<div className="p-1">
			<button
				className="px-3 py-2 select-none rounded border"
				onClick={() => onclick()}>
				{children}
			</button>
		</div>
	);
}
