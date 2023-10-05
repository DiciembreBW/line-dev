"use client";
import Model3D from "@/components/app/ui/lists/item/Model3D";
import Button from "@/components/ui/Button";
import {useAppContext, useAppDispatchContext} from "@/context/app/AppReducer";
import {ItemType} from "@/context/app/type";
import {myStorage} from "@/libs/firebase/firebase";
import {useRouter, useSearchParams} from "next/navigation";
import React, {useEffect, useState} from "react";

type Props = {};

const {getBlob} = myStorage();
export default function ModelPage({}: Props) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const itemId = searchParams.get("item_id");

	// context
	const app = useAppContext();

	// if item id === null return page
	if (itemId === null) return router.back();

	// find with id
	const item = app.items.filter((item) => item.id === itemId);

	// if no item
	if (item.length === 0) return <>no item</>;

	return (
		<div className="flex h-screen flex-col ">
			<Model item={item} />
			<Description item={item} />
		</div>
	);
}

function Model({item}: {item: ItemType[]}) {
	const [{artwork}] = item;
	const [blob, setBlob] = useState<string>();

	// if (artwork.url === "") return <>no artwork url</>;

	useEffect(() => {
		if (artwork.url === "") {
			setBlob("");
			return;
		}

		getBlob({url: artwork.url}).then((response) => {
			const myBlob = URL.createObjectURL(response);
			// set blob
			setBlob(myBlob);
		});
	}, []);
	return (
		<div className="basis-full flex justify-center items-center text-zinc-400 ">
			{/* {artwork.url !== "" && } */}
			<Model3D blob={blob} />
		</div>
	);
}

function Description({item}: {item: ItemType[]}) {
	const [{sleeve, neck, id}] = item;
	const router = useRouter();

	return (
		<div className="basis-2/6 rounded-t-2xl bg-zinc-200 p-4 shadow-xl grid justify-items-center">
			<div className="p-2 text-zinc-800 text-xl">
				{sleeve.name}
				{neck.name} | {id}
			</div>

			<div className="self-end">
				<Button primary onclick={() => router.back()}>
					ตกลง
				</Button>
			</div>
		</div>
	);
}
