"use client";
import Button from "@/components/ui/Button";
import {PriceLists} from "@/context/app/app.value";
import {Pricecalculator} from "@/libs/pricecalculator/Pricecalculator";
import Random from "@/libs/utilities/Random";
import {AnimatePresence, motion} from "framer-motion";
import React, {useEffect, useRef, useState} from "react";

type Props = {};

export default function TestPage({}: Props) {
	const [lists, setList] = useState<{id: string; text: string}[]>([]);
	const [text, setText] = useState<string>("");
	const input_ref = useRef<HTMLInputElement>(null);

	useEffect(() => {
		input_ref.current?.focus();
	}, []);

	function handleEnter(e: React.KeyboardEvent) {
		if (e.key == "Enter" && text !== "") {
			const id = Random.id();
			// setList([...lists, {text, id}]);
			setList([{text, id}, ...lists]);
			setText("");
		}
	}

	function remove(item: {id: string; text: string}) {
		console.log(item);

		const newValue = lists.filter((i) => item.id !== i.id);
		setList(newValue);
	}

	return (
		<div className="px-3 py-2">
			<div>
				<input
					type="text"
					value={text}
					onChange={(e) => setText(e.target.value)}
					className="rounded-full px-3 py-2 ring focus:outline-none w-full"
					onKeyDown={(e) => handleEnter(e)}
					ref={input_ref}
				/>
			</div>

			<ul>
				<AnimatePresence mode={"popLayout"}>
					{lists.map((item) => (
						<motion.li
							layout
							initial={{scale: 0.8, opacity: 0}}
							animate={{scale: 1, opacity: 1}}
							exit={{scale: 0.8, opacity: 0}}
							transition={{type: "spring"}}
							key={item.id}
							onClick={() => {
								remove(item);
							}}
							className="px-3 py-2 my-2 mx-4 rounded-md ring">
							{item.id} | {item.text}
						</motion.li>
					))}
				</AnimatePresence>
			</ul>
		</div>
	);
}
