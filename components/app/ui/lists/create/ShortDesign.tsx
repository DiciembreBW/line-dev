"use client";
import Button from "@/components/ui/Button";
import {useAppDispatchContext} from "@/context/app/AppReducer";
import {neckvalue, sleevevalue} from "@/context/app/app.value";
import Random from "@/libs/utilities/Random";
import {useRouter, usePathname} from "next/navigation";
import React from "react";

export default function ShortDesign({
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
		const listId = Random.id();

		dispatch({
			items: {
				type: "create",
				value: {
					id: listId,
					conter: 0,
					neck,
					sleeve,
					material: {name: "", description: "", price: 0},
					lists: [
						{label: "XXS", chest: 32, length: 28, addOn: 0, amont: 0},
						{label: "XS", chest: 34, length: 30, addOn: 0, amont: 0},
						{label: "S", chest: 36, length: 30, addOn: 0, amont: 0},
						{label: "M", chest: 38, length: 32, addOn: 0, amont: 0},
						{label: "L", chest: 40, length: 34, addOn: 0, amont: 0},
						{label: "XL", chest: 42, length: 36, addOn: 0, amont: 0},
						{label: "2XL", chest: 44, length: 38, addOn: 0, amont: 0},
						{label: "3XL", chest: 46, length: 40, addOn: 20, amont: 0},
						{label: "4XL", chest: 48, length: 40, addOn: 20, amont: 0},
						{label: "5XL", chest: 50, length: 42, addOn: 30, amont: 0},
						{label: "6XL", chest: 52, length: 46, addOn: 30, amont: 0},
					],
				},
			},
		});

		// redirect
		router.replace(`${pathname}/lists/${listId}`);
	}
	return (
		<div className="shrink-0 w-full snap-center px-3 py-2 rounded-xl border bg-zinc-200/50">
			<div className=" aspect-[3/4] flex justify-center items-center ">
				{neck_value.length == 0 && <>no neck value</>}
				{neck_value.length == 0 && <>no neck value</>}
				<div>
					{/* <pre>{JSON.stringify(neck_value, null, 3)}</pre>
					<pre>{JSON.stringify(sleeve_value, null, 3)}</pre> */}
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
