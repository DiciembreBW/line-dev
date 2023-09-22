// "use client";
// import ItemNav from "@/components/app/Navbar/ItemNav";
// import React from "react";
// import ListItem from "@/components/app/ui/lists/home/ListItem";

// type Props = {};

// export default function page({}: Props) {
// 	return (
// 		<>
// 			{/* <AppNav /> */}

// 			<ItemNav />

// 			<div className="px-3 py-2">
// 				<div className="grid gap-2">
// 					<ListItem />
// 				</div>
// 			</div>
// 		</>
// 	);
// }

import React from "react";

type Props = {params: {type: string}};

export default function ListPage({params}: Props) {
	return (
		<div>
			ListPage
			<pre>{JSON.stringify(params)}</pre>
		</div>
	);
}
