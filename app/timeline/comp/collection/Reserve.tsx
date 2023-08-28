"use client";
import React, {useState} from "react";
import Price from "./Price";

type Props = {};

export default function Reserve({}: Props) {
	const [visible, setVisible] = useState<boolean>(true);
	const [amont, setAmont] = useState<number>(0);
	const price = Price.get({amont});
	return (
		<div className="px-3 py-2">
			<div className="text-xl font-bold">Reserve</div>
			{/* {visible ? <Space name="one" /> : <Space name="two" />}

			<div className="m-1">
				<button
					className="px-3 py-2 bg-lime-400 rounded text-zinc-800"
					onClick={() => setVisible(!visible)}>
					Visible
				</button>
			</div> */}

			<div className="m-1">
				{amont}
				<button onClick={() => setAmont(amont + 4)}>+</button>
			</div>

			<div>{price.price}</div>
			<div>{price.total}</div>
			<pre>{JSON.stringify(price.rate, null, 3)}</pre>

			{/* <Price.get amont={amont} /> */}
		</div>
	);
}

function Space({name}: {name: string}) {
	const [state, setState] = useState<number>(0);
	function handle() {
		setState(state + 1);
	}
	return (
		<div>
			<div>
				{name} : {state}
			</div>
			<div className="m-1">
				<button onClick={handle} className="border px-3 py-2 rounded">
					Click
				</button>
			</div>
		</div>
	);
}
