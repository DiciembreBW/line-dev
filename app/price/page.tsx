"use client";

import {
	PriceLists,
	materialvalue,
	neckvalue,
	sleevevalue,
} from "@/context/app/app.value";
import {MaterialType, NeckType, SleeveType} from "@/context/app/type";
import {Pricecalculator} from "@/libs/pricecalculator/Pricecalculator";
import {Dialog, DialogContent} from "@mui/material";
import {useEffect, useState} from "react";

type Props = {};

export default function Page({}: Props) {
	// amont
	const [amont, setAmont] = useState<number>(2);

	// material
	const [material, setMaterial] = useState<MaterialType>({
		name: "",
		description: "",
		price: 0,
	});

	// item
	const [neck, setNeck] = useState<NeckType>({name: "", price: 0});
	const [sleeve, setSleeve] = useState<SleeveType>({name: "", price: 0});

	// price
	const {current, next} = Pricecalculator.get({amont, price_list: PriceLists});

	// price per each
	const price = current?.price ? current.price : 0;
	const ppe = price + neck.price + sleeve?.price + material.price;

	// price per eact next rate
	const priceNext = next?.price ? next.price : 0;
	const ppeN = priceNext + neck.price + sleeve?.price + material.price;

	// step up amont
	function stepUp() {
		setAmont(amont + 1);
	}

	// step down amont
	function stepDown() {
		if (amont < 1) return;
		setAmont(amont - 1);
	}

	// change mateiral
	function onChange(value: string) {
		const newValue = parseInt(value);

		if (newValue === undefined) {
			return setAmont(0);
		}
		if (newValue < 0) {
			return setAmont(0);
		}

		return setAmont(newValue);
	}

	// set material
	function handleMaterial(value: MaterialType) {
		setMaterial(value);
	}

	// set itemType

	function handleItem(neckValue: NeckType, sleeveValue: SleeveType) {
		setNeck(neckValue);
		setSleeve(sleeveValue);
	}
	return (
		<div className="sm:w-1/2 h-screen overflow-y-scroll bg-zinc-50 mx-auto">
			<div className="div flex justify-center text-xl my-3">คำนวนราคา</div>

			{/* item type */}
			<div className="grid grid-cols-2 p-2 gap-2">
				<ItemType
					neck="คอกลม"
					sleeve="แขนสั้น"
					setItem={handleItem}
					s={sleeve}
					n={neck}
				/>
				<ItemType
					neck="คอกลม"
					sleeve="แขนยาว"
					setItem={handleItem}
					s={sleeve}
					n={neck}
				/>
				<ItemType
					neck="คอโปโล"
					sleeve="แขนสั้น"
					setItem={handleItem}
					s={sleeve}
					n={neck}
				/>
				<ItemType
					neck="คอโปโล"
					sleeve="แขนยาว"
					setItem={handleItem}
					s={sleeve}
					n={neck}
				/>
				{/* <ItemType />
				<ItemType />
				<ItemType /> */}
			</div>

			{/* material select */}
			<div className="flex overflow-x-auto snap-x snap-mandatory p-2 gap-2">
				{/* <div>mateial item</div> */}
				{materialvalue.map((item, index) => (
					<div
						className={`shrink-0 basis-full aspect-[2/1] snap-center  bg-zinc-200 rounded-lg flex gap-2 ${
							item.name === material?.name && "ring ring-zinc-400"
						}`}
						key={index}>
						<div className="basis-3/6">
							<div className="h-full bg-zinc-300 rounded-lg"></div>
						</div>
						<div className="basis-3/6 grid gap-1">
							<div className="p-2">
								<div className="font-bold text-lg">{item.name}</div>
								<div>{item.description}</div>
							</div>
							<div className="self-end p-2 flex justify-between">
								<div>{item.price > 0 && <>+฿{item.price}.-</>}</div>

								<div
									className="w-fit px-4 rounded-lg bg-zinc-800 text-zinc-200 hover:cursor-pointer hover:bg-zinc-600"
									onClick={() => handleMaterial(item)}>
									เลือก
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* amont */}
			<div className="grid p-3">
				<div className="flex justify-center gap-6 items-center">
					<Button onclick={stepDown}>-</Button>
					<div className="text-3xl font-bld">
						<AmontChange amont={amont} onchange={onChange}>
							{amont}
						</AmontChange>
					</div>
					<Button onclick={stepUp}>+</Button>
				</div>
			</div>

			{/* debug */}
			{/* <pre>{JSON.stringify(neck, null, 3)}</pre> */}
			{/* <pre>{JSON.stringify(sleeve, null, 3)}</pre> */}
			{/* <pre>{JSON.stringify(current, null, 3)}</pre>
			<pre>{JSON.stringify(material, null, 3)}</pre>
			<pre>{JSON.stringify(sleeve, null, 3)}</pre>
			<pre>{JSON.stringify(neck, null, 3)}</pre> */}

			<div className="p-2">
				{/* <pre>{JSON.stringify(next)}</pre> */}
				<div>
					จำนวน {amont} ตัว = {amont * ppe} บาท @{ppe}.-
				</div>

				{next !== undefined && (
					<div>
						เรทถัดไป จำนวน {next?.quantity} ตัวๆละ {ppeN} บาท
					</div>
				)}
			</div>

			{/* <div>Next rate</div> */}
		</div>
	);
}

function ItemType({
	sleeve,
	neck,
	setItem,
	s,
	n,
}: {
	sleeve: string;
	neck: string;
	s: SleeveType | undefined;
	n: NeckType | undefined;
	setItem: (neckValue: NeckType, sleeveValue: SleeveType) => void;
}) {
	const sleeveItem = sleevevalue.filter((item) => item.name === sleeve)[0];
	const neckItem = neckvalue.filter((item) => item.name === neck)[0];
	function handleItem() {
		setItem(neckItem, sleeveItem);
	}
	return (
		<div
			className={`aspect-square border rounded-lg relative hover:cursor-pointer ${
				s?.name == sleeve && n?.name == neck && "ring ring-zinc-400"
			}`}
			onClick={handleItem}>
			<div className="h-full w-full">
				<div className="bg-zinc-200 h-full rounded-lg flex items-center justify-center">
					Model 3D
				</div>
			</div>
			<div className="absolute bottom-0 left-0 p-2">
				{sleeveItem.name}
				{neckItem.name}
			</div>
			{/* rinauotog
			<pre>{JSON.stringify(sleeveItem, null, 3)}</pre>
			<pre>{JSON.stringify(neckItem, null, 3)}</pre> */}
		</div>
	);
}

function AmontChange({
	children,
	amont,
	onchange,
}: {
	children: React.ReactNode;
	amont: number;
	onchange: (value: string) => void;
}) {
	const [open, setOpen] = useState<boolean>(false);
	const [value, setValue] = useState<string>(JSON.stringify(amont));
	useEffect(() => {
		setValue(JSON.stringify(amont));
	}, [amont]);
	function onOpen() {
		setOpen(true);
	}

	function onClose() {
		setOpen(false);
	}

	function onSave() {
		// console.log(value);
		onchange(value);
		onClose();
	}

	function onkeydown(e: React.KeyboardEvent) {
		if (e.key === "Enter") {
			onSave();
		}
	}
	return (
		<>
			<span onClick={onOpen} className="cursor-pointer">
				{children}
			</span>

			<Dialog open={open} onClose={onClose}>
				<DialogContent>
					<div className="px-3 py-2">
						<input
							type="number"
							className="w-full ring p-2 text-center font-xl focus:outline-none"
							value={value}
							onChange={(e) => setValue(e.target.value)}
							onKeyDown={onkeydown}
						/>
					</div>
					<div className="flex justify-center">
						<button className="px-3 py-2 border" onClick={onSave}>
							ตกลง
						</button>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
}

// button
function Button({
	children,
	onclick,
}: {
	children: React.ReactNode;
	onclick: () => void;
}) {
	return (
		<button onClick={onclick} className="rounded border w-10 h-10">
			{children}
		</button>
	);
}
