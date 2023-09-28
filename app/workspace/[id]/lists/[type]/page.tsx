import SelectMaterial from "@/components/app/TypePage/SelectMaterial";
import Model3D from "@/components/app/ui/lists/item/Model3D";
import Material from "@/components/app/ui/lists/itempage/Material";
import Navbar from "@/components/app/ui/lists/itempage/navbar";
import CallAPI from "@/ultils/workspace-call-api";
import React from "react";

import {AppType, ItemType} from "@/context/app/type";
import Item from "@/components/app/ui/lists/itempage/ItemList";
import ItemList from "@/components/app/ui/lists/itempage/ItemList";
import Toolsbar from "@/components/app/ui/lists/itempage/Toolsbar";
import Json from "@/components/app/ui/lists/itempage/Json";
import Title from "@/components/app/ui/lists/itempage/Title";

type Props = {params: {type: string; id: string}};

export default async function page({params}: Props) {
	const {id, type} = params;
	// const item = await CallAPI.getItem<AppType>(id);

	return (
		<div className="h-screen flex-col overflow-y-scroll">
			<Navbar />
			{/* <div className="relative ring"> */}
			{/* <Json itemId={id} /> */}
			{/* <div className="h-3/4">
				<Model3D />
			</div> */}
			<div className="grid content-start p-4 border-b-2">
				{/* <Toolsbar /> */}
				<Title id={type} />
				<Material id={type} />
			</div>

			<div className="">
				<ItemList id={type} />
			</div>
			{/* <div className="ring h-96">
				<Toolsbar />
			</div> */}
		</div>
	);
}

{
	/* <pre>{JSON.stringify(item.id, null, 3)}</pre> */
}
{
	/* {params.id} */
}
{
	/* <Item id={type} /> */
}

{
	/* <SelectMaterial id={id} value={item.material}>
				กรุณาเลือกเนื้อผ้า{" "}
			</SelectMaterial> */
}
