import {useState} from "react";
import {MaterialLists, MaterialType} from "../types/material_type";

export default function useMaterial() {
	const [materials, setMaterials] = useState<MaterialType[]>(MaterialLists);
	const [material, setMaterial] = useState<MaterialType>();

	function handle(item: MaterialType) {
		setMaterial(item);
	}

	return {material, materials, handle};
}
