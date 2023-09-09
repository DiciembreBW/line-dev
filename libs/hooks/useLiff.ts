"use client";
import {UserProfile} from "@/context/global/GlobalType";
import liff from "@line/liff";
import React, {useEffect, useState} from "react";
// import Customer from "../utilities/Customers";
// import {UserProfileType} from "../contexts/app.context/AppReducer";

type Props = {liffId: string};

// const liffId = "";

export default function useLiff({liffId}: Props) {
	const [user, setUser] = useState<UserProfile>();

	useEffect(() => {
		// liff
		// 	.init({liffId, withLoginOnExternalBrowser: true})
		// 	.then(async () => {
		// 		const user = liff.getDecodedIDToken();

		// 		setUser({
		// 			id: user?.sub,
		// 			name: user?.name,
		// 			picture: user?.picture,
		// 		});
		// 	})
		// 	.catch((err) => {
		// 		throw new Error(err);
		// 	});

		liff.ready.then(async () => {
			const user = liff.getDecodedIDToken();

			setUser({
				id: user?.sub,
				name: user?.name,
				picture: user?.picture,
			});
		});

		liff.init({liffId, withLoginOnExternalBrowser: true});
	}, []);

	return {user, liff};
}
