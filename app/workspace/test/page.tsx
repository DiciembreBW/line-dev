"use client";
import Button from "@/components/ui/Button";
import {UserProfile} from "@/context/global/GlobalType";
import useLiffV2 from "@/libs/hooks/useLiffV2";
import {Liff} from "@/libs/utilities/Liff";
import {line} from "@/ultils/line";
import liff from "@line/liff";
import {SwipeableDrawer} from "@mui/material";
import React, {useEffect, useState} from "react";

type Props = {};

export default function TestPage({}: Props) {
	const [state, setState] = useState<boolean>(true);

	function swipe(state: boolean) {
		setState(state);
	}
	return (
		<>
			<div className="flex justify-center px-3 py-2">Test page</div>
			<div>01</div>

			<Button primary onclick={() => swipe(true)}>
				Click
			</Button>

			<SwipeableDrawer
				anchor="bottom"
				open={state}
				onOpen={() => swipe(true)}
				onClose={() => swipe(false)}
				hideBackdrop={true}
				PaperProps={{
					sx: {
						borderTopLeftRadius: 16,
						borderTopRightRadius: 16,
						padding: 4,
					},
				}}
				ModalProps={{
					keepMounted: true,
				}}>
				xada
			</SwipeableDrawer>
		</>
	);
}
