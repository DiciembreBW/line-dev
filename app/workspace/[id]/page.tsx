import ItemNav from "@/components/app/Navbar/ItemNav";

import React from "react";

type Props = {};

export default function WorkspaceItemPage({}: Props) {
	return (
		<>
			{/* <WorkspaceNav /> */}
			{/* <pre>{JSON.stringify(app, null, 3)}</pre> */}

			<ItemNav />
			<div className="flex justify-center items-center h-screen font-2xl font-bold">
				/workspace/[id]
			</div>
		</>
	);
}

// import React from "react";

// type Props = {params: {id: string}};

// export default function page({params}: Props) {
// 	return (
// 		<div>
// 			id page
// 			<pre>{JSON.stringify(params, null, 3)}</pre>
// 		</div>
// 	);
// }
