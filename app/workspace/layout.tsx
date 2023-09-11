"use client";
import GlobalProvider from "@/context/global/GlobalProvider";
import useLiff from "@/libs/hooks/useLiff";
import {CircularProgress} from "@mui/material";

type Props = {children: React.ReactNode};

export default function Layout({children}: Props) {
	const {user, loading} = useLiff({liffId: "2000394306-EVnwMxlm"});

	// console.log(user);
	// console.log(loading);

	if (loading) {
		return (
			<div className="h-screen grid justify-items-center items-center touch-none">
				<CircularProgress className="text-zinc-400" color="inherit" size={100} />
			</div>
		);
	} else {
		return <GlobalProvider init={{user}}>{children}</GlobalProvider>;
	}
}
