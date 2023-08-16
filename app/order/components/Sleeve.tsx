import TitleComponent from "@/libs/components/TitleComponent";
import {useOrderDispatchContext} from "@/libs/contexts/order.context/OrderContext";
import usePrice from "@/libs/hooks/usePrice";
import useSleeve2 from "@/libs/hooks/useSleeve";
import React, {useEffect} from "react";

type Props = {};

export default function Sleeve({}: Props) {
	const {sleeve, sleeves, handle} = useSleeve2();
	const dispatch = useOrderDispatchContext();
	const {update} = usePrice();

	useEffect(() => {
		dispatch({sleeve});
		dispatch({option_value: {type: "update"}});
		update();
	}, [sleeve]);

	return (
		<div>
			<TitleComponent>Sleeve</TitleComponent>
			<div className="grid grid-cols-4 gap-2">
				{sleeves.map((item, index) => (
					<div
						key={index}
						className={`px-3 py-2 aspect-square flex flex-col justify-center items-center rounded border select-none cursor-pointer ${
							item.name == sleeve?.name && "ring"
						}`}
						onClick={() => handle(item)}>
						{item.name} {item.price}
					</div>
				))}
			</div>
		</div>
	);
}
