"use client";
import Button from "@/components/ui/Button";
import {useAppDispatchContext} from "@/context/app/AppReducer";
import {neckvalue, sleevevalue} from "@/context/app/app.value";
import Random from "@/libs/utilities/Random";
import {useRouter, usePathname} from "next/navigation";
import React from "react";

export default function LongDesign({
	name,
	neck,
	sleeve,
}: {
	name: string;
	neck: string;
	sleeve: string;
}) {
	const dispatch = useAppDispatchContext();
	const router = useRouter();
	const pathname = usePathname();
	const neck_value = neckvalue.filter((item) => item.name == neck);
	const sleeve_value = sleevevalue.filter((item) => item.name == sleeve);

	function onclick() {
		const neck = neck_value[0];
		const sleeve = sleeve_value[0];

		dispatch({
			items: {
				type: "create",
				value: {
					id: Random.id(),
					conter: 0,
					neck,
					sleeve,
					material: {name: "", description: "", price: 0},
					lists: [
						{label: "XXSs", chest: 32, length: 1, addOn: 0, amont: 0},
						{label: "XSs", chest: 34, length: 0, addOn: 0, amont: 0},
						{label: "Ss", chest: 36, length: 0, addOn: 0, amont: 0},
						{label: "Ms", chest: 38, length: 0, addOn: 0, amont: 0},
						{label: "Ls", chest: 40, length: 0, addOn: 0, amont: 0},
						{label: "XLs", chest: 42, length: 0, addOn: 0, amont: 0},
						{label: "2XLs", chest: 44, length: 0, addOn: 0, amont: 0},
						{label: "3XLs", chest: 46, length: 0, addOn: 20, amont: 0},
						{label: "4XLs", chest: 48, length: 0, addOn: 20, amont: 0},
						{label: "5XLs", chest: 50, length: 0, addOn: 30, amont: 0},
						{label: "6XLs", chest: 52, length: 0, addOn: 30, amont: 0},
					],
				},
			},
		});

		// redirect
		router.replace(`${pathname}/lists`);
	}
	return (
		<div className="shrink-0 w-full snap-center px-3 py-2 rounded-xl border bg-zinc-200/50">
			<div className=" aspect-[3/4] flex justify-center items-center ">
				{neck_value.length == 0 && <>no neck value</>}
				{neck_value.length == 0 && <>no neck value</>}
				<div>
					<pre>{JSON.stringify(neck_value, null, 3)}</pre>
					<pre>{JSON.stringify(sleeve_value, null, 3)}</pre>
				</div>
			</div>

			<div className="flex justify-center ">
				<Button primary onclick={onclick}>
					{name}
				</Button>
			</div>
		</div>
	);
}
