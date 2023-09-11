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
		liff.init({liffId});
	}, []);

	return {user, liff, loading};
}
