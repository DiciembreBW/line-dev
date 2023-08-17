import React from "react";

type Props = {children: React.ReactNode};

export default function TitleComponent({children}: Props) {
	return <div className="px-3 py-2 font-bold">{children} :</div>;
}
