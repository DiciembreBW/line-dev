"use client";
import React, {HtmlHTMLAttributes, useState} from "react";

type Props = {};

export default function Artwork({}: Props) {
	const [images, setImage] = useState<File>();
	function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files;
		if (file == null) return;
		setImage(file[0]);
	}

	function uploadImage() {
		if (images == undefined) return;

		console.log(images);
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
			<div className="m-1">
				<button onClick={uploadImage} className="px-3 py-2 w-full border rounded">
					Upload
				</button>
			</div>
			<div>{/* <pre>{JSON.stringify(images, null, 3)}</pre> */}</div>
		</>
	);
}
