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
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import React, {useEffect, useRef, useState} from "react";

type Props = {params: {type: string}};

export default function Page({params}: Props) {
	const app = useAppContext();
	const router = useRouter();
	const pathName = usePathname();
	const dispatch = useAppDispatchContext();
	const item = app.items.filter((item) => item.id == params.type)[0];
	const totalitems = Pricecalculator.totalOfItem({items: app.items});
	const rate = Pricecalculator.get({amont: totalitems, price_list: PriceLists});

	if (item == undefined) return <></>;

	const {conter, id, lists, material, neck, sleeve} = item;

	// const total = lists.reduce((period, present) => {
	// 	return period + present.amont;
	// }, 0);

	function handle() {
		// router.back();
		// // console.log(pathName);
		const listPath = pathName.split("/");

		const path = listPath
			.filter((item, index) => index !== listPath.length - 1)
			.join("/");
		// console.log(p);

		router.push(path);
	}

	const {items, price, total} = Pricecalculator.orderPrice({
		item,
		rate: rate.current,
	});

	return (
		<div className="flex flex-col h-screen">
			{/* <ListNav /> */}
			<div className="basis-3/6 flex flex-col bg-slate-200">
				{/* Navbar */}
				<ListNav />

				{/* top */}
				<div className="">
					{/* 3d */}
					<div className="relative">
						<div className="rounded-lg aspect-[4/3] ">
							{/* <Model3D /> */}
							{/* Model3D */}
						</div>

						<div className="p-2 underline absolute top-0 right-0 ">
							{/* <Link href={`${window.location.href}/model`}>กดเพื่อดูแบบ</Link> */}
							กดเพื่อดูแบบ
						</div>
					</div>
				</div>

				{/* list */}
				<div className="pt-6 pb-2 grid gap-2 rounded-t-2xl bg-slate-50">
					{/* title */}
					<div className="flex justify-between px-8">
						<div className="text-xl font-bold">
							{neck.name}
							{sleeve.name} | id :{id}
						</div>

						{/* <div className="px-8 text-right ring"> */}
						<MenuUI item={item}>...</MenuUI>
						{/* </div> */}
					</div>

					{/* material */}
					<div className="px-8">
						<SelectMaterial id={id} value={item.material}>
							กรุณาเลือกเนื้อผ้า{" "}
						</SelectMaterial>
					</div>

					{/* image upload */}
					<div className="px-8">
						{/* <pre>{JSON.stringify(item.artwork, null, 3)}</pre> */}
						<Artwork itemId={item.id} />
					</div>

					{/* items detail */}
					<div className="my-4">
						<Lists item={item} id={item.id} />
					</div>
				</div>
			</div>

			<div className="sticky bottom-0 p-2 bg-zinc-900 rounded-t-2xl text-zinc-200">
				<div className="flex justify-center items-center gap-4">
					<div>
						รวม {total} ตัว | ฿{price}
					</div>
					<div
						className="px-3 py-2 bg-zinc-50 text-zinc-800 rounded cursor-pointer"
						onClick={handle}>
						ตกลง
					</div>
				</div>
			</div>
		</div>
	);
}

function Lists({item, id}: {id: string; item: ItemType}) {
	return (
		<div className="grid grid-cols-1">
			{item.lists.map((list, index) => (
				<List key={index} id={id} value={list} item={item} />
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
	useEffect(() => {
		// console.log(ref);
		// console.log();
		const label = ref.current?.innerHTML;
		if (label == pickLabel) {
			ref.current?.scrollIntoView({behavior: "instant", block: "center"});
		}
	}, []);
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

	// render
	return (
		<div
			className={`px-8 py-2 border-b last:border-none rounded flex ${
				value.amont > 0 && "bg-zinc-200/50"
			}`}>
			{/* left */}

			{/* <div className="basis-full flex ring"> */}
			<AmontItemUI list={value} itemId={item.id}>
				<div className="basis-3/12 flex items-center">
					{/* <AmontItemUI list={value} itemId={item.id}></AmontItemUI> */}
					<div className="text-2xl" ref={ref}>
						{value.label}
					</div>
				</div>
				{/* center */}
				<div className="basis-full flex flex-col justify-center items-start">
					<div className=" text-zinc-500">
						<div>รอบอก {value.chest} นิ้ว</div>
						<div>ความยาว {value.length} นิ้ว</div>
					</div>
					<div className="font-bold">฿{PPE}</div>
				</div>
			</AmontItemUI>
			{/* </div> */}

			{/* right */}
			<div className="basis-2/12 text-center">
				<div className="m-1 ">
					<button className="rounded-full border w-6 h-6 bg-zinc-50" onClick={up}>
						+
					</button>
				</div>

				<div className="text-xl">{value.amont}</div>
				<div className="m-1 ">
					<button className="rounded-full border w-6 h-6 bg-zinc-50" onClick={down}>
						-
					</button>
				</div>
			</div>
		</div>
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
