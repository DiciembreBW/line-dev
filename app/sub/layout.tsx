// "use client";
// import {Primary} from "@/libs/components/Button";
// import AppProvider from "@/libs/contexts/app.context/AppProvider";
// import {AppType, UserProfileType} from "@/libs/contexts/app.context/AppReducer";
// import useLiff from "@/libs/hooks/useLiff";
// import React, {useEffect, useState} from "react";

// type Props = {children: React.ReactNode};

// export default function SubLayout({children}: Props) {
// 	const {user, liff} = useLiff();

// 	if (user == undefined)
// 		return (
// 			<div className="h-screen grid grid-cols-1 items-center justify-items-center">
// 				loading
// 			</div>
// 		);

// 	return (
// 		<div className="px-3 py-2">
// 			<AppProvider value={{user}}>{children}</AppProvider>
// 		</div>
// 	);
// }

import React from "react";

type Props = {};

export default function layout({}: Props) {
	return <div>layout</div>;
}
