import React from "react";

type Props = {
	children: React.ReactNode;
	primary?: boolean;
	disalbe?: boolean;
	onclick: () => void;
};

export default function Button({primary, children, disalbe, onclick}: Props) {
	// primary && (
	// );

	if (primary) {
		return (
			<div className="m-1">
				<button
					className={`px-3 py-2 border rounded bg-zinc-800 text-zinc-200`}
					// disabled
					onClick={onclick}>
					{children}
				</button>
			</div>
		);
	}

	return (
		<div className="m-1">
			<button className="px-3 py-2 border rounded text-zinc-800" onClick={onclick}>
				{children}
			</button>
		</div>
	);

	// return <pre>{JSON.stringify(primary, null, 3)}</pre>;
}
