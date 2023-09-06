"use client";

import {useAppContext} from "@/context/app/AppReducer";
import Link from "next/link";

export default function Label(name: string) {
	const app = useAppContext();
	const {id} = app;
	return (
		<div className="grid grid-rows-6 h-full">
			<div className="row-span-5 p-3">
				<div className="border rounded-lg h-full flex justify-center items-center">
					Model {name}
				</div>
			</div>
			{/* <div className="ring px-3 py-2 flex">adad</div> */}

			<div className="row-span-1 px-3 py-4 flex justify-center">
				<Link
					href={`/workspace/lists/${name}?id=${id}`}
					className="px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 h-fit">
					{/* <div className="ring h-fit"></div> */}
					ดูรายละเอียด
				</Link>
			</div>
		</div>
	);
}
