import React from "react";

type Props = {children: React.ReactNode};

export default function layout({children}: Props) {
	return <div className="bg-zinc-200/50 ">{children}</div>;
}
