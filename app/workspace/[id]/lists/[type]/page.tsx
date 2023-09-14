"use client";
import ListNav from "@/components/app/Navbar/ListNav";
import Button from "@/components/ui/Button";
import {useAppContext, useAppDispatchContext} from "@/context/app/AppReducer";
import {ListType} from "@/context/app/type";
import {Drawer, SwipeableDrawer} from "@mui/material";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React, {useState} from "react";

type Props = {params: {type: string}};

export default function Page({params}: Props) {
	const app = useAppContext();
	const router = useRouter();
	const dispatch = useAppDispatchContext();
	const item = app.items.filter((item) => item.id == params.type)[0];

	if (item == undefined) return <>ไม่พบข้อมูล</>;

	const {conter, id, lists, material, neck, sleeve} = item;

	function handleUp() {
		dispatch({
			items_counter: {
				type: "up",
				id: params.type,
			},
		});
	}
	function handleDown() {
		dispatch({
			items_counter: {
				type: "down",
				id: params.type,
			},
		});
	}

	function handle() {
		router.back();
	}
	return (
		<div className="flex flex-col h-screen">
			{/* <ListNav /> */}
			<div className="basis-full flex flex-col ">
				{/* Navbar */}
				<ListNav />

				{/* list */}
				<div className="px-3 py-2">
					{/* title */}
					<div className="text-xl font-bold">
						{neck.name}
						{sleeve.name} | id :{id}
					</div>

					{/* material */}
					<div className="my-2">
						<div className="flex justify-between">
							<div>ผ้า Dry-tech</div>
							<div>O</div>
						</div>
						<div className="text-sm">
							<p className="indent-6">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
								consequatur obcaecati fugiat facilis earum
							</p>
						</div>
					</div>

					{/* items detail */}
					<div className="p-4 flex flex-wrap gap-2 justify-center">
						{/* <pre>{JSON.stringify(item.lists, null, 3)}</pre> */}
						<Lists value={item.lists} id={item.id} />
					</div>

					<div className="p-4 flex flex-wrap gap-2 justify-center">
						Total{" "}
						{lists.reduce((period, present) => {
							return period + present.amont;
						}, 0)}{" "}
						ตัว
					</div>
				</div>
			</div>

			{/* Description */}
			<div className="grid content-end  px-5 py-4">
				{/* action */}
				<div className="flex gap-6 justify-center items-center ">
					<div className="text-2xl">฿9,560.00</div>
					<div className="">
						<button
							className="px-3 py-2 rounded-xl bg-zinc-800 text-zinc-300"
							onClick={handle}>
							ตกลง
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

function Lists({value, id}: {value: ListType[]; id: string}) {
	return (
		<>
			{/* <pre>{JSON.stringify(value[0], null, 3)}</pre> */}
			{/* <Button onclick={handleReset} primary>
				Reset
			</Button> */}
			{value.map((item, index) => (
				<List key={index} id={id} value={item} />
			))}
		</>
	);
}

function List({value, id}: {value: ListType; id: string}) {
	// return <div className="px-3 py-2">dada</div>;
	const dispatch = useAppDispatchContext();

	const [state, setState] = useState<boolean>(false);
	function swipeOpen() {
		setState(true);
	}
	function swipeClose() {
		setState(false);
	}

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
	return (
		// <div className="h-12 w-12 border rounded-full flex justify-center items-center"></div>

		<>
			<div className="h-12 w-12 border rounded-full flex justify-center items-center bg-zinc-50 relative">
				<div onClick={swipeOpen} className="">
					<div>{value.label}</div>
					{value.amont > 0 && (
						<div className="text-xs absolute -top-2 right-0 rounded-full bg-zinc-800 text-zinc-300 p-0.5">
							{value.amont}
						</div>
					)}
				</div>
			</div>
			<Drawer
				open={state}
				anchor="bottom"
				onClose={swipeClose}
				// onOpen={swipeOpen}
				// variant="temporary"
				// hideBackdrop={true}
				ModalProps={{
					slotProps: {backdrop: {invisible: true}},
				}}
				PaperProps={{
					sx: {
						borderTopRightRadius: 16,
						borderTopLeftRadius: 16,
						padding: 2,
					},
				}}>
				{/* handle */}
				<div className="grid content-center justify-center gap-2 h-full ">
					{/* label */}
					<div className="text-center">
						<div className="text-3xl font-bold">{value.label}</div>
						<div className="text-sm text-zinc-400">
							<div>รอบออก {value.chest} นิ้ว</div>
							<div>ความยาว {value.length} นิ้ว</div>
						</div>
					</div>

					{/* amont */}
					<div className="flex">
						<div className="m-1">
							<button className="w-8 h-8 border rounded bg-zinc-50" onClick={down}>
								-
							</button>
						</div>
						<div className="m-1 flex justify-center items-center">
							<div className="text-xl">{value.amont}</div>
						</div>

						<div className="m-1">
							<button className="w-8 h-8 border rounded bg-zinc-50" onClick={up}>
								+
							</button>
						</div>
					</div>

					{/* price Per each */}
					<div className="text-center text-xl">฿259.00</div>
				</div>
			</Drawer>
		</>
	);
}
