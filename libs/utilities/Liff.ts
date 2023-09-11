import {UserProfile} from "@/context/global/GlobalType";
import liff from "@line/liff";
import {useEffect, useState} from "react";

export const Liff = {
	init(liffId: string) {
		liff.init({liffId});
	},

	start() {
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

		return {user};
	},

	login(redirectUri: string) {
		if (liff.isLoggedIn()) {
			console.log("do something");
			return;
		}

		liff.login({redirectUri});
	},

	logout() {
		liff.logout();
		window.location.reload();
	},
};
