import React from "react";

type Props = {children: React.ReactNode; params: {id: string}};

export default async function Layout({children, params}: Props) {
	return <div className="">{children}</div>;
}
