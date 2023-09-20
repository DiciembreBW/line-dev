"use client";
import Button from "@/components/ui/Button";
import Random from "@/libs/utilities/Random";
import {AnimatePresence, motion} from "framer-motion";
import React, {useEffect, useRef, useState} from "react";

type Props = {};

export default function ListAnimate({}: Props) {
	const [lists, setList] = useState<{text: string; id: string}[]>([]);
	const [text, setText] = useState<string>("");
	const input_ref = useRef<HTMLInputElement>(null);

	useEffect(() => {
		input_ref.current?.focus();
	}, []);

	function addList(e: React.KeyboardEvent) {
		if (e.key == "Enter" && text !== "") {
			const id = Random.id();
			setList([{text, id}, ...lists]);
			setText("");
		}
	}

	function removeItem(item: {text: string; id: string}) {
		const newList = lists.filter((i) => i.id !== item.id);
		setList(newList);
	}

	return (
		<div className="px-3 py-2">
			<div>
				<input
					type="text"
					ref={input_ref}
					className="px-2 py-2 rounded-full focus:outline-none ring w-full"
					value={text}
					onChange={(e) => setText(e.target.value)}
					onKeyDown={(e) => addList(e)}
				/>
			</div>

			<div className="px-4">
				<AnimatePresence mode="popLayout">
					{lists.map((item, index) => (
						// <Item key={item.id} item={item} />

						<motion.div
							layout
							key={item.id}
							initial={{opacity: 0, x: -50}}
							animate={{opacity: 1, x: 0}}
							exit={{opacity: 0, x: -50}}
							transition={{type: "tween"}}
							className="px-3 py-2 border-b last:border-none flex justify-between">
							<div>
								{item.id} | {item.text}
							</div>
							<div>
								<Button onclick={() => removeItem(item)}>-</Button>
							</div>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</div>
	);
}
