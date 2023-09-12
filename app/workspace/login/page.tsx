"use client";
import Button from "@/components/ui/Button";
import {UserProfile} from "@/context/global/GlobalType";
import useLiffV2 from "@/libs/hooks/useLiffV2";
import {Liff} from "@/libs/utilities/Liff";
import {line} from "@/ultils/line";
import liff from "@line/liff";
import React, {useEffect, useState} from "react";

type Props = {};

export default function page({}: Props) {
	return (
		<div>
			{/* <div className="px-3 py-2 flex justify-center text-xl">page</div>

			<div className="flex justify-center px-3 py-2">
				<Button onclick={logout}>Logout</Button>
				<Button primary onclick={login}>
					Login
				</Button>
			</div>

			<pre>{JSON.stringify(user, null, 3)}</pre> */}
		</div>
	);
}
