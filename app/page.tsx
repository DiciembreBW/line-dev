import Link from "next/link";
import React from "react";

type Props = {};

export default async function AppPage({}: Props) {
	return (
		<div className="container grid grid-cols-1 h-screen items-center justify-items-center">
			<div className="text-3xl">AppPage</div>
		</div>
	);
}
