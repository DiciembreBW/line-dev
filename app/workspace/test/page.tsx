"use client";
import {PriceLists} from "@/context/app/app.value";
import {Pricecalculator} from "@/libs/pricecalculator/Pricecalculator";
import React, {useState} from "react";

type Props = {};

export default function TestPage({}: Props) {
	const [amont, setAmont] = useState<number>(0);
	const rate = Pricecalculator.get({amont, price_list: PriceLists});
	function handleAmont(e: string) {
		const amontInt = parseInt(e);

		const amont = isNaN(amontInt) ? 0 : amontInt;
		setAmont(amont);
	}
	return (
		<>
			<div>
				<input
					type="text"
					value={amont}
					onChange={(e) => handleAmont(e.target.value)}
					className="ring p-1"
				/>
			</div>

			<pre>{JSON.stringify(rate, null, 3)}</pre>
		</>
	);
}
