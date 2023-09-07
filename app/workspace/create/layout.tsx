"use client";
import AppProvider from "@/context/app/AppProvider";
import {AppType, init} from "@/context/app/type";
import Random from "@/libs/utilities/Random";
import React, {useEffect, useState} from "react";

type Props = {children: React.ReactNode};

export default function Layout({children}: Props) {
	const [init, setInit] = useState<AppType>({
		id: "",
		counter: 0,
	});
	useEffect(() => {
		setInit({
			id: Random.id(),
			counter: 0,
		});
	}, []);

	if (init.id !== "") {
		return (
			<div className="">
				<div className="flex justify-center items-center px-3 py-2 font-light">
					Create your order
				</div>
				{/* <pre>{JSON.stringify(id, null, 3)}</pre> */}
				<AppProvider value={init}>{children}</AppProvider>
			</div>
		);
	}

	// return (
	// 	<div>
	// 		<pre>{JSON.stringify(id)}</pre>
	// 	</div>
	// );
}
