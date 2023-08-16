"use client";
import {Secondary} from "@/libs/components/Button";
import Host from "@/libs/utilities/Host";
import liff from "@line/liff";
import Link from "next/link";
import React from "react";

type Props = {};

export default function SubPage({}: Props) {
	function logOut() {
		// console.log("logout");
		// liff.logout({re});
		liff.logout();
		window.location.reload();
	}

	return (
		<div>
			<div className="flex px-3 py-2 justify-between">
				<div className="flex gap-3">
					<Link href="/sub/profile">โปรไฟล์</Link>
				</div>

				<div>
					<div>
						<Secondary onclick={logOut}>Log out</Secondary>
					</div>
				</div>
			</div>

			{/* <div>
				<PreviewAppContext />
			</div> */}
		</div>
	);
}
