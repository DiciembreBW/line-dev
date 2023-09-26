import SelectMaterial from "@/components/app/TypePage/SelectMaterial";
import Model3D from "@/components/app/ui/lists/item/Model3D";
import Material from "@/components/app/ui/lists/itempage/Material";
import Navbar from "@/components/app/ui/lists/itempage/navbar";
import CallAPI from "@/ultils/workspace-call-api";
import React from "react";

import {AppType, ItemType} from "@/context/app/type";
import Item from "@/components/app/ui/lists/itempage/ItemList";
import ItemList from "@/components/app/ui/lists/itempage/ItemList";

type Props = {params: {type: string; id: string}};

export default async function page({params}: Props) {
	const {id, type} = params;
	// const item = await CallAPI.getItem<AppType>(id);

	return (
		<div className="flex  h-screen flex-col overflow-y-auto">
			<Navbar />
			{/* <div className="relative ring"> */}
			<ItemList id={type} />
			<Model3D />

			<Material id={type} />
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
