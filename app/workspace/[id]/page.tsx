"use client";
import Label from "@/components/app/LabelDIalog";
import ItemNav from "@/components/app/Navbar/ItemNav";
import Preview from "@/components/app/Preview";
import PreviewJSON from "@/components/app/PreviewJSON";
import Button from "@/components/ui/Button";
import {useAppContext, useAppDispatchContext} from "@/context/app/AppReducer";
import {neckValue, sleeveValue} from "@/context/app/app.value";
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
	const neck_value = neckValue.filter((item) => item.name == neck);
	const sleeve_value = sleeveValue.filter((item) => item.name == sleeve);

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
					lists: [],
				},
			},
		});

		// redirect
		router.replace(`${pathname}/lists`);
	}
	return (
		<div className="shrink-0 w-full snap-center px-3 py-2 rounded-xl border bg-zinc-200/50">
			<div className=" aspect-[3/4] flex justify-center items-center ">
				{/* <Preview Content={Label(name)}>{name}</Preview> */}
				{/* <pre>{JSON.stringify(neck_value, null, 3)}</pre> */}
				{/* <pre>{JSON.stringify(neck_value, null, 3)}</pre> */}

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
