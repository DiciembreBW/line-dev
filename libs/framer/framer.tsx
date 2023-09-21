import React from "react";
import {motion, AnimatePresence} from "framer-motion";

const Component = React.forwardRef(
	({children}: {children: React.ReactNode}, ref) => (
		<motion.div
			// ref={ref}
			layout
			initial={{scale: 0.8, opacity: 0}}
			animate={{scale: 1, opacity: 1}}
			exit={{scale: 0.8, opacity: 0}}
			transition={{type: "spring", duration: 0.4}}>
			{children}
		</motion.div>
	)
);

const Popup = React.forwardRef(
	(
		{
			children,
		}: {
			children: React.ReactNode;
		},
		ref
	) => (
		<motion.div
			// ref={ref}
			layout
			initial={{
				scale: 0,
				opacity: 0,
			}}
			animate={{
				scale: 1,
				opacity: 1,
			}}
			exit={{scale: 0, opacity: 0}}
			transition={{type: "spring", duration: 0.4}}>
			{children}
		</motion.div>
	)
);

export const Framer = {
	Animate2: motion(Component),
	AnimatePop: motion(Popup),
	AnimatePresence,
};

// const MyComponent = motion(Component);
// const Animate = motion(Component);
