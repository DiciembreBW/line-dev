import {materialvalue} from "@/context/app/app.value";
import React from "react";
import MaterialDialog from "./MaterialDialog";

type Props = {};

export default function MaterialPage({}: Props) {
	return (
		<div className="h-screen overflow-y-auto sm:w-1/2 mx-auto bg-zinc-50">
			<div className="grid p-2 ">
				{materialvalue.map((item, index) => (
					<div key={index} className="flex gap-2 p-2 border-b last:border-none">
						<div className="basis-2/6 ">
							{/* <img
								src=""
								alt=""
								className="w-full aspect-square rounded-lg bg-zinc-200"
							/> */}

							<MaterialDialog image="/">
								<div className="w-full aspect-square rounded-lg bg-zinc-200"></div>
							</MaterialDialog>
						</div>

						<div className="basis-full grid">
							<div>
								<div className="text-xl font-bold">{item.name}</div>
								<div>{item.description}</div>
							</div>
							<div className="self-end">
								{item.price > 0 && <>+ ฿{item.price}.-</>}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
