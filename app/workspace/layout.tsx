"use client";
import GlobalProvider from "@/context/global/GlobalProvider";
import useLiff from "@/libs/hooks/useLiff";

type Props = {children: React.ReactNode};

export default function Layout({children}: Props) {
	const {user} = useLiff({liffId: "2000394306-EVnwMxlm"});
	if (user == undefined) return <>loading...</>;

	return <GlobalProvider init={{user}}>{children}</GlobalProvider>;

	// return <>{children}</>;
}
