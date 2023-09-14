"use client";
import {UserProfile} from "@/context/global/GlobalType";
import useLiffV2 from "@/libs/hooks/useLiffV2";
import {Liff} from "@/libs/utilities/Liff";
import {line} from "@/ultils/line";
import liff from "@line/liff";
import {SwipeableDrawer} from "@mui/material";
import React, {useEffect, useState} from "react";

type Props = {};

export default function TestPage({}: Props) {
	return (
		<>
			<Button type="primary">Priamry</Button>
			<Button type="secondary">Priamry</Button>
			<Button type="">Priamry</Button>
			{/* <Button type="">Test01</Button> */}
			{/* <Button disable primary>
				Button Primary Disable
			</Button>

			<Button>Button Primary</Button>
			<Button disable>Button disable</Button> */}
		</>
	);
}

function Button({
	children,
	disable,
	type,
}: {
	children: React.ReactNode;
	disable?: boolean;
	type?: VarianType;
}) {
	// is primary
	if (type == "primary")
		return (
			<div className="m-1">
				<button
					className={`px-3 py-2 rounded bordera ${PrimaryVariant.bg(
						type
					)} ${PrimaryVariant.text(type)} `}
					disabled={disable}>
					{children}
				</button>
			</div>
		);

	// // is seccondary
	// if (type == "secondary")
	// 	return (
	// 		<div className="m-1">
	// 			<button
	// 				className={`px-3 py-2 rounded bordera ${SeccondaryVariant.bg(
	// 					type
	// 				)} ${SeccondaryVariant.text(type)} `}
	// 				disabled={disable}>
	// 				{children}
	// 			</button>
	// 		</div>
	// 	);

	// is default
	return (
		<div className="m-1">
			<button className={`px-3 py-2 rounded border `} disabled={disable}>
				{children}
			</button>
		</div>
	);
}

type VarianType = "primary" | "secondary" | "";

const PrimaryVariant = {
	bg: (type: VarianType) => {
		switch (type) {
			case "primary": {
				return "bg-zinc-900";
			}
			default: {
				return "bg-zinc-200";
			}
		}
	},
	text: (type: VarianType) => {
		switch (type) {
			case "primary": {
				return "text-zinc-200";
			}
			default: {
				return "text-zinc-900";
			}
		}
	},
};

// const SeccondaryVariant = {
// 	bg: (type: VarianType) => {
// 		switch (type) {
// 			case "primary": {
// 				return "bg-zinc-900";
// 			}
// 			default: {
// 				return "bg-zinc-200";
// 			}
// 		}
// 	},
// 	text: (type: VarianType) => {
// 		switch (type) {
// 			case "primary": {
// 				return "text-zinc-200";
// 			}
// 			default: {
// 				return "text-zinc-900";
// 			}
// 		}
// 	},
// };

const DisableVariant = {
	bg: (type: boolean) => {
		type ? "bg-zinc-500" : "";
	},
	text: (type: VarianType) => {
		switch (type) {
			case "primary": {
				return "bg-zinc-600";
			}
		}
	},
};
