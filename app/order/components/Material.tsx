import TitleComponent from "@/libs/components/TitleComponent";
import {useOrderDispatchContext} from "@/libs/contexts/order.context/OrderContext";
import useMaterial from "@/libs/hooks/useMaterial";
import {MaterialType} from "@/libs/types/material_type";
import React from "react";

type Props = {};

export default function Material({}: Props) {
	const {material, materials, handle} = useMaterial();
	const dispatch = useOrderDispatchContext();
	// console.log(MaterialLists);

	function handleMaterial(item: MaterialType) {
		handle(item);
		dispatch({
			material: item,
		});

		dispatch({option_value: {type: "update"}});
	}

	return (
		<div className="">
			<TitleComponent> เนื้อผ้า </TitleComponent>
			<div className="w-full flex overflow-x-auto snap-x px-3 py-2 snap-mandatory ">
				{materials.map((item, index) => (
					<div
						key={index}
						className={` flex shrink-0 w-full h-auto px-3 py-2
						snap-center hover:cursor-pointer snap-always rounded
						${item.name == material?.name && "ring"}`}
						onClick={() => handleMaterial(item)}>
						<div className="basis-auto">
							<div className="font-bold">
								{item.name} | {item.price}
							</div>
							<div className="py-1 text-sm">{item.description}</div>
						</div>
						<div className="basis-4/12 flex justify-end items-end text-xl">
							{item.price !== 0 && (
								<div className="">
									<i>+{item.price}</i>.-
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
