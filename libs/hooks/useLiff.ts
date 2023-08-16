"use client";
import liff from "@line/liff";
import React, {useEffect, useState} from "react";
import Customer from "../utilities/Customers";
import {UserProfileType} from "../contexts/app.context/AppReducer";
import Host from "../utilities/Host";

type Props = {liffId: string};
// const liffId = "";

export default function useLiff({liffId}: Props) {
	const [user, setUser] = useState<UserProfileType>();

	useEffect(() => {
		liff
			.init({liffId, withLoginOnExternalBrowser: true})
			.then(async () => {
				// liff.login({redirectUri: Host.url()});
				const user = liff.getDecodedIDToken();

				if (user?.sub) {
					const response = await Customer.getUser({
						id: user.sub,
						data: {
							displayName: user.name,
							userId: user.sub,
							pictureUrl: user.picture,
							email: user.email || "",
						},
					});
					if ((await response) == null) return;

					setUser(await response);
				}
			})
			.catch((err) => {
				throw new Error(err);
			});
	}, []);

	return {user, liff};
}
