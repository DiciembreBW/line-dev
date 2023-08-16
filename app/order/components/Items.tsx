// import Title from "@/app/m/components/ui/Title";
import {
	useOrderContext,
	useOrderDispatchContext,
} from "@/libs/contexts/order.context/OrderContext";
import React, {useEffect, useState} from "react";
import {Down, Onchange, Up} from "./Step";
import Price from "@/libs/utilities/Price";
import TitleComponent from "@/libs/components/TitleComponent";

type Props = {};

export default function Items({}: Props) {
	const order = useOrderContext();
	const [quantity, setQuantity] = useState<number>(0);
	const [total, setTotal] = useState<number>(0);

	useEffect(() => {
		setTotal(Price.sumOfAmont({lists: order.sleeve.label}));
	}, [order]);

	return (
		<div>
			<TitleComponent>จำนวน {total}</TitleComponent>

			{/* <pre>{JSON.stringify(order.sleeve.label[0], null, 3)}</pre> */}
			<pre>{JSON.stringify(order.rate, null, 3)}</pre>
			<div className="grid grid-cols-1 ">
				{order &&
					order.sleeve?.label?.map((item, index) => (
						<div
							key={index}
							className="flex justify-center items-center border-b
					last:border-none py-1">
							{/* left */}
							<div className="basis-3/12 px-3 py-2">
								<div className="text-3xl font-bold">{item.label}</div>
							</div>

							{/* center */}
							<div className="basis-4/12 px-3 py-2">
								<div>รอบอก {item.chest}</div>
								<div>ความยาว {item.length}</div>
								<div className="font-bold">
									{item.price + order.option_value + order.rate?.price}
								</div>
							</div>

							{/* right */}
							<div className="basis-5/12 flex justify-between items-center px-3 py-2">
								<Down label={item}>-</Down>
								<Onchange label={item} />
								<Up label={item}>+</Up>
							</div>
						</div>
					))}
			</div>
			{/* <pre>{JSON.stringify(order, null, 3)}</pre> */}
		</div>
	);
}
