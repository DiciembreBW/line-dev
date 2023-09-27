import React from "react";

type Props = {params: {type: string; id: string}};

export default function MaterialPage({params}: Props) {
	return (
		<div>
			MaterialPage
			<pre>{JSON.stringify(params, null, 3)}</pre>
		</div>
	);
}
