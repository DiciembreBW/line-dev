import {
	useOrderContext,
	useOrderDispatchContext,
} from "@/libs/contexts/order.context/OrderContext";
import usePrice from "@/libs/hooks/usePrice";
import {LabelType} from "@/libs/types/sleeve_type";
import React, {useEffect, useState} from "react";

type Props = {label: LabelType; children?: React.ReactNode};

export function Up({label, children}: Props) {
	const dispatch = useOrderDispatchContext();
	const {update} = usePrice();

	function handle() {
		dispatch({item: {type: "increase", label}});
		update();
	}
	return (
		<div
			className="basis-auto rounded-full border aspect-square px-3 flex items-center justify-center"
			onClick={handle}>
			<button className="">{children}</button>
		</div>
	);
}

export function Down({label, children}: Props) {
	const dispatch = useOrderDispatchContext();
	const {update} = usePrice();

	function handle() {
		dispatch({item: {type: "decrease", label}});
		update();
	}
	return (
		<div
			className="basis-auto rounded-full border aspect-square px-3 flex items-center justify-center"
			onClick={handle}>
			<button className="">{children}</button>
		</div>
	);
}

export function Onchange({label, children}: Props) {
	const dispatch = useOrderDispatchContext();
	const order = useOrderContext();
	const {update} = usePrice();
	const [amont, setAmont] = useState<string | number>("");

	useEffect(() => {
		// console.log();
		if (isNaN(label.amont)) {
			setAmont("");
			return;
		}

		setAmont(label.amont);
		update();
	}, [label, amont, order.sleeve]);

	// handle whene user change amont each label
	function handleOnBlur(value: string, label: LabelType) {
		if (value == "") {
			dispatch({item: {type: "onchange", label, value: "0"}});
			setAmont(0);
		}
	}

	function handle(value: string, label: LabelType) {
		setAmont(value);
		dispatch({item: {type: "onchange", label, value}});
	}
	return (
		//

		<div className="basis-7/12">
			<input
				type="number"
				className="w-full text-center outline-none"
				value={amont}
				onChange={(e) => handle(e.target.value, label)}
				onBlur={(e) => handleOnBlur(e.target.value, label)}
			/>
			<div>{children}</div>
		</div>
	);
}
