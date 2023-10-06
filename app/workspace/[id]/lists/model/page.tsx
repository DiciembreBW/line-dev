"use client";
import Artwork from "@/components/app/ui/lists/item/Artwork";
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
	const dispatch = useAppDispatchContext();

	// context
	const app = useAppContext();

	// find with id
	const item = app.items.filter((item) => item.id === itemId);

	// model 3d
	const [file, setFile] = useState<File>();
	const [blob, setBlob] = useState<string>();

	useEffect(() => {
		getBlob({url: artwork.url}).then((response) => {
			if (response === undefined) return;
			const myBlob = URL.createObjectURL(response);
			// set blob
			setBlob(myBlob);
		});
		// }
	}, []);

	// if item id === null return page
	if (itemId === null) return router.back();

	// if no item
	if (item.length === 0) return <>no item</>;

	const [{artwork, sleeve, neck, id}] = item;

	// if (artwork.url === "") {
	// 	setBlob("");
	// 	return;
	// }

	function handleFile({file}: {file: File}) {
		// console.log(blob);
		try {
			setFile(file);
			setBlob(URL.createObjectURL(file));
		} catch (error) {
			console.log(error);
		}
	}

	function upload() {
		if (file === undefined) return;
		const {upload} = myStorage(app.id);
		upload({file, fileName: id}).then((url) => {
			dispatch({
				artwork: {
					type: "upload",
					itemId: id,
					value: {
						url,
						status: true,
					},
				},
			});
		});
	}

	return (
		<div className="flex h-screen flex-col ">
			{/* <Model item={item} appId={app.id} />
			<Description item={item} appId={app.id} /> */}

			<div className="basis-5/6 flex justify-center items-center text-zinc-400 ">
				<Model3D blob={blob} />
			</div>

			<div className="basis-1/6 rounded-t-2xl bg-zinc-200 p-4 shadow-xl grid justify-items-center">
				<div className="p-2 text-zinc-800 text-xl">
					{sleeve.name}
					{neck.name} | {id}
				</div>

				<Artwork item={item[0]} appId={app.id} PenddingCallback={handleFile} />
				{/* <pre>{JSON.stringify(item[0].artwork, null, 3)}</pre> */}

				<div className="self-end">
					<Button primary onclick={upload}>
						upload
					</Button>
				</div>
			</div>
		</div>
	);
}

// function Model({item, appId}: {item: ItemType[]; appId: string}) {
// 	const [{artwork}] = item;
// 	const [blob, setBlob] = useState<string>();

// 	// if (artwork.url === "") return <>no artwork url</>;

// 	useEffect(() => {
// 		// if (artwork.url === "") {
// 		// 	setBlob("");
// 		// 	return;
// 		// }

// 		// getBlob({url: artwork.url}).then((response) => {
// 		// 	const myBlob = URL.createObjectURL(response);
// 		// 	// set blob
// 		// 	setBlob(myBlob);
// 		// });

// 		setBlob(artwork.url);
// 	}, [artwork]);
// 	return (
// 		<div className="basis-3/6 flex justify-center items-center text-zinc-400 ">
// 			{/* {artwork.url !== "" && } */}
// 			<Model3D blob={blob} />
// 			{/* <img src={blob} /> */}
// 		</div>
// 	);
// }

// function Description({item, appId}: {item: ItemType[]; appId: string}) {
// 	const [{sleeve, neck, id}] = item;
// 	const router = useRouter();

// 	return (
// 		<div className="basis-3/6 rounded-t-2xl bg-zinc-200 p-4 shadow-xl grid justify-items-center">
// 			<div className="p-2 text-zinc-800 text-xl">
// 				{sleeve.name}
// 				{neck.name} | {id}
// 			</div>

// 			<Artwork item={item[0]} appId={appId} />
// 			{/* <pre>{JSON.stringify(item[0].artwork, null, 3)}</pre> */}

// 			<div className="self-end">
// 				<Button primary onclick={() => router.back()}>
// 					ตกลง
// 				</Button>
// 			</div>
// 		</div>
// 	);
// }
