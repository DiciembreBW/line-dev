import React from "react";

import Link from "next/link";
import UserAvatar from "./components/UserAvatar";

type Props = {};

export default function OrderHomepage({}: Props) {
	return (
		<div className="grid grid-cols-1 gap-6">
			<div className="flex gap-6 justify-between items-center  px-3 py-2">
				<div>
					<div className="flex justify-center items-center w-12 aspect-square border rounded-full">
						<Link href="/order/create">+</Link>
					</div>
				</div>
				<div>
					<Link href="/order/profile">
						<UserAvatar />
					</Link>
				</div>
			</div>
		</div>
	);
}
