"use client";
import {useRouter} from "next/navigation";
import React, {useState} from "react";

type Props = {};

export default function SearchItem({}: Props) {
	const router = useRouter();
	const [id, setId] = useState<string>("");

	function onenter(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key == "Enter" && id !== "") {
			router.push(`/workspace/${id}`);
		}
	}
	return (
		<>
			<input
				type="text"
				className="rounded-full text-center border px-9 py-1"
				placeholder="ค้นหา"
				value={id}
				onChange={(e) => setId(e.target.value)}
				onKeyDown={(e) => onenter(e)}
			/>
		</>
	);
}
