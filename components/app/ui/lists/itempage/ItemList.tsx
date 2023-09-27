"use client";
import ListNav from "@/components/app/Navbar/ListNav";
import SelectMaterial from "@/components/app/TypePage/SelectMaterial";
import AmontItemUI from "@/components/app/ui/AmontItemUI";
import Artwork from "@/components/app/ui/lists/item/Artwork";
import {useAppContext, useAppDispatchContext} from "@/context/app/AppReducer";
import {PriceLists} from "@/context/app/app.value";
import {ItemType, ListType} from "@/context/app/type";
import {Pricecalculator} from "@/libs/pricecalculator/Pricecalculator";
import MenuUI from "@/ultils/mui/MenuUI";
import {motion, AnimatePresence} from "framer-motion";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import React, {useEffect, useRef, useState} from "react";

type Props = {id: string};

export default function ItemList({id}: Props) {
	// context
	const app = useAppContext();
	const dispatch = useAppDispatchContext();

	// item
	const item = app.items.filter((item) => item.id == id);
	const value: ItemType | null = item.length > 0 ? item[0] : null;

	if (value === null) return;
	// const value = item.length > 0
	// const totalitems = Pricecalculator.totalOfItem({items: app.items});
	// const rate = Pricecalculator.get({amont: totalitems, price_list: PriceLists});

	// desctrucring
	const {neck, sleeve, lists} = value;

	// const {conter, id, lists, material, neck, sleeve} = item;

	// const total = lists.reduce((period, present) => {
	// 	return period + present.amont;
	// }, 0);

	// const {items, price, total} = Pricecalculator.orderPrice({
	// 	item,
	// 	rate: rate.current,
	// });

	return (
		<div className="grid gap-1 h-full ring">
			{lists.map((item, index) => (
				<List value={item} key={index} id={id} item={value} />
			))}
		</div>
	);
}

function List({
	value,
	id,
	item,
}: {
	value: ListType;
	id: string;
	item: ItemType;
}) {
	//  init
	const app = useAppContext();
	const dispatch = useAppDispatchContext();
	const [state, setState] = useState<boolean>(false);
	const totalitems = Pricecalculator.totalOfItem({items: app.items});
	const rate = Pricecalculator.get({amont: totalitems, price_list: PriceLists});

	const ref = useRef<HTMLDivElement>(null);
	// useEffect(() => {
	// 	// console.log(ref);
	// 	// console.log();
	// 	const label = ref.current?.innerHTML;
	// 	if (label == pickLabel) {
	// 		ref.current?.scrollIntoView({behavior: "instant", block: "center"});
	// 	}
	// }, []);
	const search = useSearchParams();
	const pickLabel = search.get("label");

	// functions
	function ppeCalculator(price: number | undefined): number {
		const p = price == undefined ? 0 : price;
		return (
			p + value.addOn + item.neck.price + item.sleeve.price + item.material.price
		);
	}

	const PPE = ppeCalculator(rate.current?.price);
	const PPE_NEXT = ppeCalculator(rate.next?.price);

	//
	function up() {
		dispatch({
			items_lists: {
				type: "up",
				id,
				value,
			},
		});
	}

	function down() {
		dispatch({
			items_lists: {
				type: "down",
				id,
				value,
			},
		});
	}

	function handleReset() {
		dispatch({
			items_lists: {
				type: "reset",
				id,
			},
		});
	}
	const intialWidth = 48;
	const [width, setWidth] = useState<number>(intialWidth);
	const refContainer = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// console.log(refContainer);
		// console.log(12);
		function handleClickOutside(event: any) {
			// if (refContainer.current && !refContainer.current?.contains(event.target)) {
			// 	console.log("pout");
			// }
			// console.log(refContainer.current?.contains(m));

			// console.log();
			if (refContainer.current && refContainer.current?.contains(event.target)) {
				console.log(12);
			} else {
				setWidth(intialWidth);
			}

			// if (refContainer.current) {
			// 	console.log("have");
			// }

			// console.log(refContainer.current);

			// console.log("click outside");
			// console.log(refContainer.current);
		}

		document.addEventListener("mousedown", handleClickOutside);
		// document.addEventListener
	}, [refContainer]);

	// render
	return (
		<div className="">
			<AnimatePresence>
				{/* <div className="ring w-12 h-12">box</div> */}
				<motion.div
					// layout
					ref={refContainer}
					initial={{width: intialWidth}}
					animate={{width: width}}
					exit={{width: 0}}
					className="cursor-pointer flex rounded-r-lg text-zinc-400 select-none p-1"
					transition={{type: "spring", duration: 0.25}}
					onClick={() => setWidth(120)}>
					<div className="w-56 text-center">{value.label}</div>
					{width > intialWidth && (
						<div className="w-96 rounded flex justify-center gap-2 items-center">
							<button className="rounded-full border w-4 bg-zinc-800" onClick={down}>
								-
							</button>

							<div className="">
								<AmontItemUI itemId={item.id} list={value}>
									{value.amont}
								</AmontItemUI>
							</div>
							<button className="rounded-full border w-4 bg-zinc-800" onClick={up}>
								+
							</button>
						</div>
					)}
				</motion.div>
			</AnimatePresence>
		</div>
		// <div
		// 	className={`px-8 py-2 border-b last:border-none rounded flex ${
		// 		value.amont > 0 && "bg-zinc-200/50"
		// 	}`}>
		// 	{/* left */}

		// 	{/* <div className="basis-full flex ring"> */}
		// 	<AmontItemUI list={value} itemId={item.id}>
		// 		<div className="basis-3/12 flex items-center">
		// 			{/* <AmontItemUI list={value} itemId={item.id}></AmontItemUI> */}
		// 			<div className="text-2xl" ref={ref}>
		// 				{value.label}
		// 			</div>
		// 		</div>
		// 		{/* center */}
		// 		<div className="basis-full flex flex-col justify-center items-start">
		// 			<div className=" text-zinc-500">
		// 				<div>รอบอก {value.chest} นิ้ว</div>
		// 				<div>ความยาว {value.length} นิ้ว</div>
		// 			</div>
		// 			<div className="font-bold">฿{PPE}</div>
		// 		</div>
		// 	</AmontItemUI>
		// 	{/* </div> */}

		// 	{/* right */}
		// 	<div className="basis-2/12 text-center">
		// 		<div className="m-1 ">
		// 			<button className="rounded-full border w-6 h-6 bg-zinc-50" onClick={up}>
		// 				+
		// 			</button>
		// 		</div>

		// 		<div className="text-xl">{value.amont}</div>
		// 		<div className="m-1 ">
		// 			<button className="rounded-full border w-6 h-6 bg-zinc-50" onClick={down}>
		// 				-
		// 			</button>
		// 		</div>
		// 	</div>
		// </div>
	);
}

// import React from "react";

// type Props = {params: {type: string}};

// export default function ListTypePage({params}: Props) {
// 	return (
// 		<div>
// 			ListTypePage
// 			<pre>{JSON.stringify(params, null, 3)}</pre>
// 		</div>
// 	);
// }
