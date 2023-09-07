import {useAppContext} from "@/context/app/AppReducer";
import Link from "next/link";

export function Model3D(name: string) {
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
					href={`/workspace/create/${id}/lists/`}
					className="px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 h-fit">
					ดูรายละเอียด
				</Link>
			</div>
		</div>
	);
}

export function CreateNav() {
	const app = useAppContext();
	const {id} = app;

	return (
		<div className="flex items-center px-3 py-2 justify-between">
			<div className="">
				<Link href={`/workspace/create`}> Design </Link>
			</div>
			<div className="">
				<Link href={`/workspace/create/lists`}>List </Link>
			</div>

			<div className="">
				<Link href={`/workspace`}>Workspace</Link>
			</div>
		</div>
	);
}
