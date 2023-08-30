"use client";
import {Menu, MenuItem, SwipeableDrawer} from "@mui/material";
import React, {useState} from "react";
import {useCollectionDispatchContext} from "../../context/collection.context/CollectionReducer";
import useSwipe from "@/libs/hooks/useSwipe";
import {
	LabelType,
	MaterialType,
	NeckType,
	SleeveType,
	materialValue,
	neckValue,
	sleeveValue,
} from "../../context/collection.context/types";
import Price from "./Price";

type Props = {};

export default function CreateItem({}: Props) {
	const [status, setStatus] = useState<boolean>(true);
	const [isSleeve, setIsSleeve] = useState<SleeveType>();
	const [isNeck, setIsNeck] = useState<NeckType>();
	const [isMaterial, setIsMaterial] = useState<MaterialType>();
	const [amont, setAmont] = useState<number>(0);
	const price = Price.get({amont});
	const addOnPirce =
		(isNeck ? isNeck.price : 0) +
		(isSleeve ? isSleeve?.price : 0) +
		(isMaterial ? isMaterial.price : 0);

	const dispatch = useCollectionDispatchContext();
	function handleSwipe(status: boolean) {
		setStatus(status);
	}

	function handleCreate() {
		// dispatch({});
		// setStatus(false);
		console.log(isNeck);
		console.log(isSleeve);
		console.log(isMaterial);
	}

	function handleOnchangeAmont(value: string) {
		const _amont = parseInt(value);
		const resault = isNaN(_amont) ? 0 : _amont;

		setAmont(resault);
	}

	function handleSleeve(value: SleeveType) {
		setIsSleeve(value);
	}

	function handleNeck(value: NeckType) {
		setIsNeck(value);
	}

	function handleMaterial(value: MaterialType) {
		setIsMaterial(value);
	}
	return (
		<React.Fragment key={"bottom"}>
			<div className="bg-lime-400 text-zinc-800 m-1 px-3 py-2 flex justify-between rounded">
				<div className="">Create Item</div>
				<div onClick={() => handleSwipe(true)}>+</div>
			</div>
			<SwipeableDrawer
				anchor="bottom"
				open={status}
				onOpen={() => handleSwipe(true)}
				onClose={() => handleSwipe(false)}>
				<div className="px-3 py-2 h-full bg-zinc-900 text-zinc-500 border-t border-zinc-800">
					<div className="grid grid-cols-1 px-3 py-2 gap-2 rounded-lg bg-zinc-950/40">
						<div className="flex justify-between px-4 py-3 border-b border-zinc-800">
							<div>
								{isSleeve ? (
									<>
										{isSleeve.name} {isSleeve.price}
									</>
								) : (
									<>แขนเสื้อ</>
								)}
							</div>
							<SleeveMenu items={sleeveValue} handleOnclick={handleSleeve} />
						</div>

						<div className="flex justify-between px-4 py-3 border-b border-zinc-800">
							<div>
								{isNeck ? (
									<>
										{isNeck.name} {isNeck.price}
									</>
								) : (
									<>คอเสื้อ</>
								)}
							</div>
							<NeckMenu items={neckValue} handleOnclick={handleNeck} />
						</div>

						<div className="flex justify-between px-4 py-3 border-b border-zinc-800">
							<div>
								{isMaterial ? (
									<>
										{isMaterial.name} {isMaterial.price}
									</>
								) : (
									<>เนื้อผ้า</>
								)}
							</div>
							<MaterialMenu items={materialValue} handleOnclick={handleMaterial} />
						</div>

						<div className="flex justify-between px-4 py-3 border-b border-zinc-800">
							<div>ราคา add on</div>
							<div>{addOnPirce}</div>
							{/* <NeckMenu items={neckValue} handleOnclick={handleNeck} /> */}
						</div>

						<div className="flex justify-end items-center gap-3 px-4 py-3">
							<input
								type="text"
								className="p-2 rounded text-right bg-transparent focus:outline-none"
								value={amont}
								onChange={(e) => handleOnchangeAmont(e.target.value)}
							/>
							<div className="">ตัว</div>
						</div>

						<div className="flex justify-between px-4 py-3 border-b border-zinc-800">
							<div>ราคาพื้นฐาน</div>
							<div>{price && price.price}</div>
						</div>

						<div className="flex justify-between px-4 py-3 border-b border-zinc-800">
							<div>ราคาต่อตัว</div>
							<div>{price && price.price + addOnPirce}</div>
						</div>

						<div className="flex justify-between px-4 py-3 border-b border-zinc-800">
							<div>ราคารวม</div>
							<div>{price && (price.price + addOnPirce) * amont}</div>
						</div>

						<div className="flex justify-between px-4 py-3 border-b border-zinc-800">
							<button
								className="px-3 py-2 border bg-lime-400 rounded"
								onClick={handleCreate}>
								x
							</button>
						</div>
					</div>

					{/* price caculator */}

					{/* <pre>{JSON.stringify(isSleeve, null, 3)}</pre> */}
					{/* <div className="p-1">
						<button onClick={() => Create()}>Create</button>
					</div> */}
				</div>
			</SwipeableDrawer>
		</React.Fragment>
	);
}

function SleeveMenu({
	handleOnclick,
	items,
}: {
	handleOnclick: (value: SleeveType) => void;
	items: SleeveType[];
}) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
		setAnchorEl(event.currentTarget);
	}
	function handleClose() {
		setAnchorEl(null);
	}

	function handle(value: SleeveType) {
		handleOnclick(value);
		handleClose();
	}

	return (
		<>
			<button onClick={handleClick}>/</button>
			<Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
				{items.map((item, index) => (
					<div key={index}>
						<MenuItem onClick={() => handle(item)}>{item.name}</MenuItem>
					</div>
				))}
			</Menu>
		</>
	);
}

function NeckMenu({
	handleOnclick,
	items,
}: {
	handleOnclick: (value: NeckType) => void;
	items: NeckType[];
}) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
		setAnchorEl(event.currentTarget);
	}
	function handleClose() {
		setAnchorEl(null);
	}

	function handle(value: NeckType) {
		handleOnclick(value);
		handleClose();
	}

	return (
		<>
			<button onClick={handleClick}>/</button>
			<Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
				{items.map((item, index) => (
					<div key={index}>
						<MenuItem onClick={() => handle(item)}>{item.name}</MenuItem>
					</div>
				))}
			</Menu>
		</>
	);
}

function MaterialMenu({
	handleOnclick,
	items,
}: {
	handleOnclick: (value: MaterialType) => void;
	items: MaterialType[];
}) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
		setAnchorEl(event.currentTarget);
	}
	function handleClose() {
		setAnchorEl(null);
	}

	function handle(value: MaterialType) {
		handleOnclick(value);
		handleClose();
	}

	return (
		<>
			<button onClick={handleClick}>/</button>
			<Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
				{items.map((item, index) => (
					<div key={index}>
						<MenuItem onClick={() => handle(item)}>{item.name}</MenuItem>
					</div>
				))}
			</Menu>
		</>
	);
}
