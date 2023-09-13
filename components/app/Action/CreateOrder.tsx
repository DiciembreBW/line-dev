"use client";
import Button from "@/components/ui/Button";
import {useAppContext, useAppDispatchContext} from "@/context/app/AppReducer";
import {AppType} from "@/context/app/type";
import {useGlobalContext} from "@/context/global/GlobalReducer";
import {UserProfile} from "@/context/global/GlobalType";
import useLiffV2 from "@/libs/hooks/useLiffV2";
import Random from "@/libs/utilities/Random";
// import useLiff from "@/libs/hooks/useLiff";
import {line} from "@/ultils/line";
import CallAPI from "@/ultils/workspace-call-api";
import liff from "@line/liff";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
type Props = {};

export default function CreateOrder({}: Props) {
	const router = useRouter();
	const app = useAppContext();
	const global = useGlobalContext();

	// const {login, logout, user} = useLiffV2({redirectUri: window.location.href});

	const [user, setUser] = useState<UserProfile>();

	useEffect(() => {
		liff.ready.then(() => {
			if (liff.isLoggedIn()) {
				const token = liff.getDecodedIDToken();
				setUser({
					id: token?.sub,
					name: token?.name,
					picture: token?.picture,
				});
			}
		});
	}, []);

	function login() {
		liff.ready.then(() => {
			if (!liff.isLoggedIn()) {
				liff.login({redirectUri: window.location.href});
				return;
			}
		});
	}

	function logout() {
		liff.logout();
		window.location.reload();
		// Liff.logout();
	}

	//

	function handleLogin() {
		// if (user == undefined) {
		// 	return login();
		// }

		const value: AppType = {
			...app,
			init: true,
			id: Random.id(),
			user: user,
		};

		CallAPI.createItem(value).then((id) => {
			// 	line.sendText([
			// 		{
			// 			type: "text",
			// 			text: `
			// order name : ${value.user?.name}
			// link : https://liff.line.me/2000394306-EVnwMxlm/${id}/lists`,
			// 		},
			// 	]);

			console.log(id);
		});

		// console.log("save data");
	}

	// if (user == undefined) return <> loading ...</>;

	// if (user) {
	return (
		<div className="flex flex-col justify-center items-center pt-2 pb-6 gap-1">
			<div>Hi : {user?.name}</div>
			<div className="rounded-full bg-zinc-800 text-zinc-100 p-2 flex items-center gap-6">
				<div className="gap-2 items-center pl-2">
					<div className="text-2xl font-bold">฿2,560.00</div>
				</div>

				<div className="bg-zinc-200 text-zinc-800 rounded-full p-1  self-end">
					<button className="px-3 py-1" onClick={handleLogin}>
						เปิดออเดอร์
					</button>
				</div>
			</div>

			{user && <Button onclick={logout}>Logout</Button>}

			{/* <pre>{JSON.stringify(user, null, 3)}</pre> */}
		</div>
	);
	// }
}
