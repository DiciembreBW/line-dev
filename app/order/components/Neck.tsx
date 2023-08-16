import TitleComponent from "@/libs/components/TitleComponent";
import {useOrderDispatchContext} from "@/libs/contexts/order.context/OrderContext";
import useNeck from "@/libs/hooks/useNeck";
import useNeck2 from "@/libs/hooks/useNeck";
import {NeckLists, NeckType} from "@/libs/types/neck_type";
import React, {useEffect, useState} from "react";

type Props = {};

export default function Neck({}: Props) {
	const {neck, necks, handle} = useNeck2();
	const dispatch = useOrderDispatchContext();

	useEffect(() => {
		dispatch({
			neck,
		});

		dispatch({option_value: {type: "update"}});
	}, [neck]);

	return (
		<div>
			<TitleComponent>Neck</TitleComponent>
			<div className="grid grid-cols-4 gap-2">
				{necks.map((item, index) => (
					<div
						key={index}
						className={`px-3 py-2 aspect-square justify-center items-center flex flex-col rounded border select-none cursor-pointer ${
							item.name == neck?.name && "ring"
						}`}
						onClick={() => handle(item)}>
						{item.name}
						<div>{item.price}</div>
					</div>
				))}
			</div>

			{/* <pre>{JSON.stringify(neck, null, 3)}</pre> */}
		</div>
	);
}
