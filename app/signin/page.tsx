"use client";
import {signIn} from "next-auth/react";
import React from "react";

type Props = {};

export default function page({}: Props) {
	return (
		<div className="grid grid-cols-1 h-screen items-center justify-items-center">
			<div className="w-fit justify-center">
				<button
					onClick={() => signIn()}
					className="px-6 py-5 rounded bg-lime-400 shadow">
					Login
				</button>
			</div>
		</div>
	);
}
