import TitleComponent from "@/libs/components/TitleComponent";
import {useOrderDispatchContext} from "@/libs/contexts/order.context/OrderContext";
import usePrice from "@/libs/hooks/usePrice";
import useSleeve2 from "@/libs/hooks/useSleeve";
import {SleeveLists, SleeveType} from "@/libs/types/sleeve_type";
import React, {useEffect, useState} from "react";

type Props = {};

export default function Sleeve({}: Props) {
	// const {sleeve, sleeves, handle} = useSleeve2();
	const dispatch = useOrderDispatchContext();

	const [sleeves, setSleeves] = useState<SleeveType[]>(SleeveLists);
	const [sleeve, setSleeve] = useState<SleeveType>();
	const {update} = usePrice();

	function handle(item: SleeveType) {
		dispatch({
			sleeve: {
				type: "update",
				value: item,
			},
		});

		dispatch({
			option_value: {type: "update"},
		});

		setSleeve(item);
	}
	return (
		<div>
			<TitleComponent>แขน</TitleComponent>
			<div className="grid grid-cols-4 gap-2 px-3 py-2">
				{sleeves.map((item, index) => (
					<div
						key={index}
						className={`px-3 py-2 aspect-square flex flex-col justify-center items-center rounded border select-none cursor-pointer ${
							item.name == sleeve?.name && "ring"
						}`}
						onClick={() => handle(item)}>
						{item.name}
						{/* {item.price} */}
					</div>
				))}
			</div>
		</div>
	);
}
