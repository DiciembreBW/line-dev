"use client";
import GlobalProvider from "@/context/global/GlobalProvider";
import useLiff from "@/libs/hooks/useLiff";
import {CircularProgress} from "@mui/material";

type Props = {children: React.ReactNode};

export default function Layout({children}: Props) {
	const {user} = useLiff({liffId: "2000394306-EVnwMxlm"});

	// if (user == undefined)
	// 	return (
	// 		<div className="h-screen grid justify-items-center items-center touch-none">
	// 			<CircularProgress className="text-zinc-400" color="inherit" size={100} />
	// 		</div>
	// 	);

	return <GlobalProvider init={{user}}>{children}</GlobalProvider>;
}
