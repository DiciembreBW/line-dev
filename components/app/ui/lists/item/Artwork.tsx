"use client";
import {useAppContext, useAppDispatchContext} from "@/context/app/AppReducer";
import {ItemType} from "@/context/app/type";
import {myStorage} from "@/libs/firebase/firebase";
import CallAPI from "@/ultils/workspace-call-api";
import React, {HtmlHTMLAttributes, useEffect, useState} from "react";
import {v4} from "uuid";

type Props = {
	item: ItemType;
	appId: string;
	PenddingCallback: ({file}: {file: File}) => void;
};

export default function Artwork({item, appId, PenddingCallback}: Props) {
	// app dispatch
	const dispatch = useAppDispatchContext();
	const app = useAppContext();

	// const [{id: itemId}] = item;
	const {id: itemId} = item;
	const [images, setImage] = useState<File>();
	const [url, setUrl] = useState<string[]>([]);

	// get item

	const storage = myStorage(appId);

	function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files;
		if (file == null) return;
		setImage(file[0]);

		// const blob = URL.createObjectURL(file[0]);
		// PenddingCallback({blob});
		PenddingCallback({file: file[0]});
		// dispatch({
		// 	artwork: {
		// 		type: "update",
		// 		itemId: itemId,
		// 		value: {
		// 			url: URL.createObjectURL(file[0]),
		// 			status: true,
		// 		},
		// 	},
		// });
	}

	// function uploadImage() {
	// 	// image is not emty
	// 	if (images == undefined) return;

	// 	// upload to server
	// 	storage.upload({file: images, fileName: itemId}).then((url) => {
	// 		// after uploaded
	// 		// set image == undesign
	// 		setImage(undefined);

	// 		//
	// 		// dispatch
	// 		dispatch({
	// 			artwork: {
	// 				type: "upload",
	// 				value: {url, status: false},
	// 				itemId,
	// 			},
	// 		});
	// 	});
	// }

	// async function getItem() {
	// 	// console.log(x());
	// 	setUrl([]);
	// 	storage.getItems((url) => {
	// 		setUrl((pre) => {
	// 			console.log(url);

	// 			return [...pre, url];
	// 		});
	// 	});
	// }

	// function remove(name: string) {
	// 	storage.removeItem(name, () => {
	// 		// updateUrl();
	// 		getItem();
	// 	});
	// }

	// function updateUrl() {
	// 	setUrl([]);
	// 	storage.getItems((url) => {
	// 		console.log(url);

	// 		setUrl((pre) => [...pre, url]);
	// 	});
	// }

	// function uploadToFirebaseServer({url}: {url: string}) {
	// 	dispatch({
	// 		artwork: {
	// 			type: "upload",
	// 			itemId,
	// 			value: {status: true, url},
	// 		},
	// 	});
	// }
	return (
		<div className="w-full p-2">
			{/* button */}
			<div className="p-2">
				<input
					type="file"
					className="w-full file:w-full file:border-none file:px-3 file:py-2 file:rounded-full file:bg-none"
					accept="image/*"
					onChange={(e) => handleInput(e)}
				/>
			</div>

			{/* image preview */}
			{images && (
				<div>
					{/* image preview */}
					{/* <img
						src={URL.createObjectURL(images)}
						width={150}
						className="w-full aspect-square object-none rounded-xl"
						alt=""
					/> */}

					{/* upload button */}
					{/* <div className="m-1">
						<button onClick={uploadImage} className="px-3 py-2 w-full border rounded">
							Upload
						</button>
					</div> */}
				</div>
			)}

			{/* <div>
				<button className="border px-3 py-2 rounded w-full" onClick={getItem}>
					get
				</button>

				<div className="grid grid-cols-4 gap-2">
					{url.map((url, index) => (
						<div
							className="hover:cursor-pointer hover:ring"
							key={index}
							onClick={() => remove(url)}>
							<img src={url} className="rounded-lg" alt="" />
						</div>
					))}
				</div>
			</div> */}
		</div>
	);
}
