"use client";
import ListNav from "@/components/app/Navbar/ListNav";
import Button from "@/components/ui/Button";
import {useAppContext, useAppDispatchContext} from "@/context/app/AppReducer";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React from "react";

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

			<div className="basis-full flex flex-col">
				{/* Navbar */}
				<ListNav />

				{/* handle */}
				<div className="grid content-center justify-center gap-2 h-full ">
					{/* label */}
					<div className="text-center">
						<div className="text-3xl font-bold">XS</div>
						<div className="text-sm text-zinc-400">
							<div>รอบออก 38 นิ้ว</div>
							<div>ความยาว 32 นิ้ว</div>
						</div>
					</div>

					{/* amont */}
					<div className="flex">
						<div className="m-1">
							<button
								className="w-8 h-8 border rounded bg-zinc-50"
								onClick={handleDown}>
								-
							</button>
						</div>
						<div className="m-1 flex justify-center items-center">
							<div className="text-xl">{conter}</div>
						</div>

						<div className="m-1">
							<button className="w-8 h-8 border rounded bg-zinc-50" onClick={handleUp}>
								+
							</button>
						</div>
					</div>

					{/* price Per each */}
					<div className="text-center text-xl">฿259.00</div>
				</div>
			</div>

			{/* Description */}
			<div className="grid content-end bg-zinc-50 rounded-t-3xl shadow-2xl shadow-black px-5 py-4">
				{/* title */}
				<div className="text-xl font-bold">
					{params.type} | id :{id}
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
					<Label />
					<Label />
					<Label />
					<Label />
					<Label />
					<Label />
					<Label />
				</div>

				<div className="p-4 flex flex-wrap gap-2 justify-center">Total 36 ตัว</div>

				{/* action */}
				<div className="flex gap-6 justify-center items-center ">
					<div className="text-2xl">฿9,560.00</div>
					<div className="">
						<button
							className="px-3 py-2 rounded-xl bg-zinc-800 text-zinc-300"
							onClick={handle}>
							ตกลง
						</button>
						{/* <Button primary onclick={handle}>
							Save
						</Button> */}
					</div>
				</div>
			</div>
		</div>
	);
}

function Label() {
	// return <div className="px-3 py-2">dada</div>;

	return (
		<div className="h-12 w-12 border rounded-full flex justify-center items-center">
			0
		</div>
	);
}
