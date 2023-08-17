import TitleComponent from "@/libs/components/TitleComponent";
import {useOrderDispatchContext} from "@/libs/contexts/order.context/OrderContext";
import useMaterial from "@/libs/hooks/useMaterial";
import {MaterialType} from "@/libs/types/material_type";
import Random from "@/libs/utilities/Random";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Material({}: Props) {
	const {material, materials, handle} = useMaterial();
	const dispatch = useOrderDispatchContext();
	// console.log(MaterialLists);

	function handleMaterial(item: MaterialType) {
		handle(item);
		dispatch({
			material: {type: "update", value: item},
		});

		dispatch({option_value: {type: "update"}});
	}

	return (
		<div className="">
			<TitleComponent> เนื้อผ้า </TitleComponent>
			<div className="w-full flex overflow-x-auto snap-x snap-mandatory p-1 ">
				{materials.map((item, index) => (
					<div
						key={index}
						className={`basis-full flex shrink-0 gap-2 h-auto 
						snap-center hover:cursor-pointer snap-always rounded mx-1 p-1
						${item.name == material?.name && "bg-neutral-100"}`}
						onClick={() => handleMaterial(item)}>
						<div className="basis-6/12">
							<Image
								src={""}
								// width={12}
								// height={12}
								alt=""
								className="aspect-square h-full bg-neutral-200 w-full"
							/>
						</div>

						<div className="basis-6/12">
							<div className="font-bold">
								{item.name} | {item.price}
							</div>
							<div className="py-1 text-sm">
								<div>{item.description}</div>

								{item.price !== 0 && (
									<div className="">
										<i> +{item.price} .-</i>
									</div>
								)}
							</div>
						</div>
						{/* detail */}
						{/* <div className="basis-2/12 flex justify-end items-end text-xl"></div> */}
					</div>
				))}
			</div>
		</div>
	);
}
