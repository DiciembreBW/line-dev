import TitleComponent from "@/libs/components/TitleComponent";
import {
	useOrderContext,
	useOrderDispatchContext,
} from "@/libs/contexts/order.context/OrderContext";
import useNeck from "@/libs/hooks/useNeck";
import useNeck2 from "@/libs/hooks/useNeck";
import {NeckLists, NeckType} from "@/libs/types/neck_type";
import React, {useEffect, useState} from "react";

type Props = {};

export default function Neck({}: Props) {
	const dispatch = useOrderDispatchContext();
	const order = useOrderContext();

	const [necks, setNecks] = useState<NeckType[]>(NeckLists);
	const [neck, setNeck] = useState<NeckType>();

	function handle(item: NeckType) {
		dispatch({
			neck: {
				type: "update",
				value: item,
			},
		});

		dispatch({
			option_value: {type: "update"},
		});

		setNeck(item);
	}

	return (
		<div>
			<TitleComponent>คอ</TitleComponent>
			<div className="grid grid-cols-4 gap-2 px-3 py-2">
				{necks.map((item, index) => (
					<div
						key={index}
						className={`px-3 py-2 aspect-square justify-center items-center
						flex flex-col rounded border select-none cursor-pointer ${
							item.name == neck?.name && "ring"
						}`}
						onClick={() => handle(item)}>
						{item.name}
						{/* <div>{item.price}</div> */}
					</div>
				))}
			</div>
		</div>
	);
}
