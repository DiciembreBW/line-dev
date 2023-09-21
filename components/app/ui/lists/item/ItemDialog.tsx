import Button from "@/components/ui/Button";
import {ItemType, ListType} from "@/context/app/type";
import {Framer} from "@/libs/framer/framer";
import {Dialog, DialogActions, DialogContent} from "@mui/material";
import {AnimatePresence, motion, spring} from "framer-motion";
import React, {useState} from "react";
import MaterialUI from "./MaterialUI";
import TitleItem from "./TitleItem";
import ListsUI from "./ListsUI";
import MenuListItem from "./MenuListItem";
import {useAppContext} from "@/context/app/AppReducer";
import Model3D from "./Model3D";

type Props = {children: React.ReactNode; item: ItemType; lists?: ListType};

export default function ItemDialog({children, item, lists}: Props) {
	const [state, setState] = useState<boolean>(false);
	const app = useAppContext();
	function closeDialog() {
		setState(false);
	}

	function openDialog() {
		setState(true);

		// console.log(x, y);
	}
	return (
		<>
			<div onClick={openDialog} className="w-full">
				{children}
			</div>

			<Framer.AnimatePresence>
				{state && (
					<Dialog
						open={state}
						onClose={closeDialog}
						transitionDuration={0}
						hideBackdrop={true}
						PaperProps={{sx: {backgroundColor: "transparent", boxShadow: "none"}}}
						fullScreen
						className="">
						{/* <Framer.AnimatePop> */}
						<motion.div
							initial={{opacity: 1, x: window.innerWidth}}
							animate={{
								opacity: 1,
								x: 0,
								transition: {
									delay: -0.025,
									type: "tween",
								},
							}}
							exit={{
								opacity: 1,
								x: window.innerWidth,
								transition: {
									delay: -0.025,
									type: "tween",
								},
							}}
							// transition={{type: "tween"}}
							className="h-screen bg-slate-50 overflow-y-scroll">
							<DialogContent>
								<div className="p-2 ">
									<div className="rounded-lg aspect-[3/4]">
										<Model3D />
									</div>
									<div className="flex justify-between">
										<TitleItem neck={item.neck} sleeve={item.sleeve} />
										<MenuListItem value={item}>...</MenuListItem>
									</div>

									<MaterialUI id={item.id} material={item.material}>
										เลือกผ้า
									</MaterialUI>
								</div>

								<ListsUI lists={item.lists} item={item} />

								{/* <pre>{JSON.stringify(item.lists, null, 3)}</pre> */}
							</DialogContent>

							<DialogActions className="justify-center sticky bottom-0 bg-zinc-100">
								<div className="text-center w-full">
									<Button primary onclick={closeDialog}>
										ตกลง
									</Button>
								</div>
							</DialogActions>
						</motion.div>
						{/* </Framer.AnimatePop> */}
					</Dialog>
				)}
			</Framer.AnimatePresence>
		</>
	);
}
