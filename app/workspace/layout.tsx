import GlobalProvider from "@/context/global/GlobalProvider";

type Props = {children: React.ReactNode};

export default function Layout({children}: Props) {
	// 1.initla liff app
	// useEffect(() => {
	// 	liff.init({liffId: "2000394306-EVnwMxlm"});
	// }, []);

	// if (user == undefined)
	// 	return (
	// 		<div className="h-screen grid justify-items-center items-center touch-none">
	// 			<CircularProgress className="text-zinc-400" color="inherit" size={100} />
	// 		</div>
	// 	);

	return (
		<div className="sm:w-1/2 mx-auto bg-zinc-50">
			<GlobalProvider>{children}</GlobalProvider>
		</div>
	);
}

// import React from "react";

// type Props = {children: React.ReactNode};

// export default function Layout({children}: Props) {
// 	return <div>{children}</div>;
// }
