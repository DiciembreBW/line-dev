"use client";
import Label from "@/components/app/LabelDIalog";
import ItemNav from "@/components/app/Navbar/ItemNav";
import Preview from "@/components/app/Preview";
import PreviewJSON from "@/components/app/PreviewJSON";
import Button from "@/components/ui/Button";
import {useAppContext, useAppDispatchContext} from "@/context/app/AppReducer";
import {neckvalue, sleevevalue} from "@/context/app/app.value";
import Random from "@/libs/utilities/Random";
import {useRouter, usePathname} from "next/navigation";
import React from "react";

type Props = {};

export default function WorkspaceItemPage({}: Props) {
	const app = useAppContext();
	return (
		<>
			{/* <WorkspaceNav /> */}
			{/* <pre>{JSON.stringify(app, null, 3)}</pre> */}

			<ItemNav />
			<div className="px-3 py-2 grid gap-2 content-center  ">
				<div className="flex snap-x snap-mandatory gap-2 overflow-x-scroll">
					<Item name="เสื้อ t-shirt" neck="คอกลม" sleeve="แขนสั้น" />
					<Item name="เสื้อ โปโล" neck="คอโปโล" sleeve="แขนสั้น" />
					<Item name="เสื้อ t-shirt แขนยาว" neck="คอกลม" sleeve="แขนยาว" />
					{/* <Item name="Cxn" />
					<Item name="Thailand" />
					<Item name="MD" /> */}
				</div>
				{/* <PreviewJSON /> */}
			</div>
		</>
	);
}

function Item({
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

	// const tableofsize_value = tableofsizevalue.filter(
	// 	(item) => item.name == sleeve
	// );

	function onclick() {
		const neck = neck_value[0];
		const sleeve = sleeve_value[0];
		// const tableofsize = tableofsize_value[0];

		dispatch({
			items: {
				type: "create",
				value: {
					id: Random.id(),
					conter: 0,
					neck,
					sleeve,
					material: {name: "", description: "", price: 0},
					// lists: tableofsizevalue.filter((item) => item.name == sleeve.name),
					// lists: tableofsizevalue.filter((item) => item.name == sleeve.name),
					// lists: tableofsizevalue.,
					lists: [
						{label: "XXS", chest: 32, length: 0, addOn: 0, amont: 0},
						{label: "XS", chest: 34, length: 0, addOn: 0, amont: 0},
						{label: "S", chest: 36, length: 0, addOn: 0, amont: 0},
						{label: "M", chest: 38, length: 0, addOn: 0, amont: 0},
						{label: "L", chest: 40, length: 0, addOn: 0, amont: 0},
						{label: "XL", chest: 42, length: 0, addOn: 0, amont: 0},
						{label: "2XL", chest: 44, length: 0, addOn: 0, amont: 0},
						{label: "3XL", chest: 46, length: 0, addOn: 20, amont: 0},
						{label: "4XL", chest: 48, length: 0, addOn: 20, amont: 0},
						{label: "5XL", chest: 50, length: 0, addOn: 30, amont: 0},
						{label: "6XL", chest: 52, length: 0, addOn: 30, amont: 0},
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
				{/* {tableofsizevalue.filter((item) => (
					item.name == sleeve && <div>{item.name}</div>;
				))} */}

				{neck_value.length == 0 && <>no neck value</>}
				{neck_value.length == 0 && <>no neck value</>}
				<div>
					<pre>{JSON.stringify(neck_value, null, 3)}</pre>
					<pre>{JSON.stringify(sleeve_value, null, 3)}</pre>
					{/* <pre>{JSON.stringify(tableofsize_value, null, 3)}</pre> */}
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
