"use client";
import {useAppContext} from "@/libs/contexts/app.context/AppContext";
import React from "react";

type Props = {};

export default function UserAvatar({}: Props) {
	const app = useAppContext();
	const {user} = app;

	return (
		<div className="">
			<img
				src={user?.pictureUrl}
				className="aspect-square h-12 rounded-full"
				alt=""
			/>
			{/* <pre>{JSON.stringify(app, null, 3)}</pre> */}
		</div>
	);
}
