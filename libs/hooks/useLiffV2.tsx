"use client";
import {UserProfile} from "@/context/global/GlobalType";
import liff from "@line/liff";
import React, {useEffect, useState} from "react";

type Props = {redirectUri: string};

// https://medium.com/linedevth/%E0%B9%80%E0%B8%84%E0%B8%A5%E0%B9%87%E0%B8%94%E0%B8%A5%E0%B8%B1%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B3-liff-login-%E0%B8%9A%E0%B8%99-external-browser-%E0%B8%97%E0%B8%B5%E0%B9%88-document-%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%9A%E0%B8%AD%E0%B8%81%E0%B8%84%E0%B8%B8%E0%B8%93-bb36fef789b4

export default function useLiffV2({redirectUri}: Props) {
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
		liff.login({redirectUri});
	}

	function logout() {
		liff.logout();
		window.location.reload();
		// Liff.logout();
	}
	return {user, login, logout};
}
