"use client";
import {myStorage} from "@/libs/firebase/firebase";
import React, {HtmlHTMLAttributes, useEffect, useState} from "react";
import {v4} from "uuid";

type Props = {};

const storage = myStorage("images");

export default function Artwork({}: Props) {
	const [images, setImage] = useState<File>();
	const [url, setUrl] = useState<string[]>([]);

	function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files;
		if (file == null) return;
		setImage(file[0]);
	}

	function uploadImage() {
		if (images == undefined) return;

		storage.upload(images).then((res) => {
			// window.alert("uploaded");
			setImage(undefined);
			getItem();
		});
	}

	async function getItem() {
		// console.log(x());
		setUrl([]);
		storage.getItems((url) => {
			setUrl((pre) => {
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
			setUrl((pre) => [...pre, url]);
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
					multiple
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
