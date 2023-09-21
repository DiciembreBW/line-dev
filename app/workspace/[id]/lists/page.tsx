"use client";
import ItemNav from "@/components/app/Navbar/ItemNav";
import {useAppContext} from "@/context/app/AppReducer";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import CreateOrderUI from "@/components/app/ui/CreateOrderUI";
import {ItemType, ListType, PriceListType} from "@/context/app/type";
import {Pricecalculator} from "@/libs/pricecalculator/Pricecalculator";
import {PriceLists} from "@/context/app/app.value";
import MenuListItem from "@/components/app/ui/MenuListItem";
import {usePathname, useRouter} from "next/navigation";
import ListAnimate from "@/components/app/ui/ListAnimate";
import {motion, AnimatePresence} from "framer-motion";
import CreateDialog from "@/components/app/ui/lists/create/CreateDialog";
import {Framer} from "@/libs/framer/framer";
import ItemDialog from "@/components/app/ui/lists/item/ItemDialog";
import Model3D from "@/components/app/ui/lists/item/Model3D";
import ListItem from "@/components/app/ui/lists/home/ListItem";
import useLiff from "@/libs/hooks/useLiff";
import liff from "@line/liff";

type Props = {};

export default function page({}: Props) {
	return (
		<div className="sm:w-1/2 mx-auto">
			{/* <AppNav /> */}

			<ItemNav />

			<div className="px-3 py-2">
				<div className="grid gap-2">
					<ListItem />
				</div>
			</div>
		</div>
	);
}
