import {useAppContext, useAppDispatchContext} from "@/context/app/AppReducer";
import {PriceLists} from "@/context/app/app.value";
import {ItemType, ListType} from "@/context/app/type";
import {Pricecalculator} from "@/libs/pricecalculator/Pricecalculator";
import {useSearchParams} from "next/navigation";
import React, {useEffect, useRef, useState} from "react";
import HandleItemAmont from "./HandleItemAmont";

type Props = {lists: ListType[]; item: ItemType};

export default function ListsUI({lists, item}: Props) {
	//  init
	const app = useAppContext();
	const dispatch = useAppDispatchContext();
	const [state, setState] = useState<boolean>(false);
	const totalitems = Pricecalculator.totalOfItem({items: app.items});
	const rate = Pricecalculator.get({amont: totalitems, price_list: PriceLists});
	const {id: itemId, neck, sleeve, material} = item;

	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const label = ref.current?.innerHTML;
		if (label == pickLabel) {
			ref.current?.scrollIntoView({behavior: "smooth", block: "center"});
		}
	}, []);
	const search = useSearchParams();
	const pickLabel = search.get("label");

	// functions
	function ppeCalculator(price: number | undefined): number {
		const p = price == undefined ? 0 : price;
		return p + neck.price + item.sleeve.price + item.material.price;
	}
	const PPE = ppeCalculator(rate.current?.price);
	const PPE_NEXT = ppeCalculator(rate.next?.price);

	//
	function up(value: ListType) {
		dispatch({
			items_lists: {
				type: "up",
				id: itemId,
				value,
			},
		});
	}

	function down(value: ListType) {
		dispatch({
			items_lists: {
				type: "down",
				id: itemId,
				value,
			},
		});
	}

	return (
		<div>
			{/* <pre>{JSON.stringify(neck, null, 3)}</pre>
			<pre>{JSON.stringify(sleeve, null, 3)}</pre>
			<pre>{JSON.stringify(material, null, 3)}</pre>
			<pre>{JSON.stringify(rate, null, 3)}</pre> */}

			{lists.map((item, index) => (
				<div key={index}>
					<div
						className={`p-2 border-b last:border-none rounded flex ${
							item.amont > 0 && "bg-zinc-200/50"
						}`}>
						{/* left */}
						<div className="basis-6/12 flex justify-center items-center">
							<div className="text-2xl" ref={ref}>
								{item.label}
							</div>
						</div>
						{/* center */}
						<div className="basis-full flex flex-col justify-center items-start">
							<div className=" text-zinc-500">
								<div>รอบอก {item.chest} นิ้ว</div>
								<div>ความยาว {item.length} นิ้ว</div>
							</div>
							<div className="font-bold">
								฿{PPE + item.addOn}{" "}
								{item.addOn > 0 && (
									<i className="font-light text-sm">(ไซส์พิเศษ​ +{item.addOn}​)</i>
								)}
							</div>
						</div>
						{/* right */}
						<div className="basis-5/12 text-center">
							<div className="m-1 ">
								<button
									className="rounded-full border w-6 h-6 bg-zinc-50"
									onClick={() => up(item)}>
									+
								</button>
							</div>

							<div className="text-xl">
								{/* <AmontItemUI list={value} itemId={item.id}> */}
								<HandleItemAmont list={item} itemId={itemId}>
									{item.amont}
								</HandleItemAmont>
								{/* </AmontItemUI> */}
							</div>
							<div className="m-1 ">
								<button
									className="rounded-full border w-6 h-6 bg-zinc-50"
									onClick={() => down(item)}>
									-
								</button>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
