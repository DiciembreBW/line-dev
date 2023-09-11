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
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		liff.init({liffId, withLoginOnExternalBrowser: true}).then(() => {
			liff.ready.then(async () => {
				// get decode id
				const user = liff.getDecodedIDToken();

				// set user
				setUser({
					id: user?.sub,
					name: user?.name,
					picture: user?.picture,
				});

				// set loading false
				setLoading(false);
			});
		});
	}, []);

	return {user, liff, loading};
}
