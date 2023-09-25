"use client";
import {useAppDispatchContext} from "@/context/app/AppReducer";
import {myStorage} from "@/libs/firebase/firebase";
import React, {HtmlHTMLAttributes, useEffect, useState} from "react";
import {v4} from "uuid";

type Props = {itemId: string};

const storage = myStorage("images");

export default function Artwork({itemId}: Props) {
	// app dispatch
	const dispatch = useAppDispatchContext();
	const [images, setImage] = useState<File>();
	const [url, setUrl] = useState<string[]>([]);

	function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files;
		if (file == null) return;
		setImage(file[0]);
	}

	function uploadImage() {
		// image is not emty
		if (images == undefined) return;

		// upload to server
		storage.upload(images).then((url) => {
			// after uploaded
			// set image == undesign
			setImage(undefined);

			//
			// console.log(res.ref.bucket);
			// console.log(url);
			uploadToFirebaseServer({url});

			// retive item
			getItem();
		});

		// storage.takeUpload(images);
	}

	async function getItem() {
		// console.log(x());
		setUrl([]);
		storage.getItems((url) => {
			setUrl((pre) => {
				console.log(url);

				return [...pre, url];
			});
		});
	}

	function remove(name: string) {
		storage.removeItem(name, () => {
			// updateUrl();
			getItem();
		});
	}

	function updateUrl() {
		setUrl([]);
		storage.getItems((url) => {
			console.log(url);

			setUrl((pre) => [...pre, url]);
		});
	}

	function uploadToFirebaseServer({url}: {url: string}) {
		dispatch({
			artwork: {
				type: "upload",
				itemId,
				value: {status: true, url},
			},
		});
	}
	return (
		<>
			<div>upload image</div>
			<div>
				{/* step 1 */}
				<input
					type="file"
					className="w-full"
					accept="image/*"
					onChange={(e) => handleInput(e)}
				/>
			</div>

			<div className="grid justify-items-center">
				{images && (
					<div className="w-full">
						<img
							src={URL.createObjectURL(images)}
							width={150}
							className="w-full rounded-xl border"
							alt=""
						/>
					</div>
				)}
			</div>
			<div className="m-1">
				<button onClick={uploadImage} className="px-3 py-2 w-full border rounded">
					Upload
				</button>
			</div>

			<div>get item</div>
			<div>
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
			</div>
			<div>{/* <pre>{JSON.stringify(url, null, 3)}</pre> */}</div>
		</>
	);
}
