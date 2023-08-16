import React from "react";
import {UserProfileType} from "../contexts/app.context/AppReducer";

type Props = {value: UserProfileType};

export default function UserProfile({value}: Props) {
	return (
		<div className="flex gap-2 px-3 py-2">
			{/* <pre>{JSON.stringify(value, null, 3)}</pre> */}
			<div className="basis-auto">
				<img
					src={value.pictureUrl}
					className="aspect-square  rounded-full"
					alt=""
				/>
			</div>
			<div className="basis-auto">
				<div className="text-xl font-bold">{value.displayName}</div>
				<div>{value.statusMessage}</div>
				<div className="text-sm text-neutral-400">{value.userId}</div>
			</div>
		</div>
	);
}
