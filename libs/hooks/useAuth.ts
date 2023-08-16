"use client";
import {useSession, signIn, signOut} from "next-auth/react";
import {useRouter} from "next/navigation";
import React from "react";
import Host from "../utilities/Host";

export default function useAuth() {
	const {data, status} = useSession();
	const router = useRouter();

	if (status == "unauthenticated") {
		router.replace(`${Host.url()}/signin`);
	}
	return {data, status, signIn, signOut};
}
