import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Link from "next/link";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "RunsapApp",
	description: "Runsnap",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		// <html lang="en" className="bg-zinc-900 text-zinc-400">
		<html lang="en" className="bg-zinc-50">
			<body className={inter.className}>
				{/* <div className="flex justify-between">
					<div className="flex px-3 py-2 gap-4">
						<Link href={"/workspace"}>space</Link>
					</div>
					<div className="px-3 py-2 font-semibold">
						<Link href="/">RUN</Link>
					</div>
				</div> */}

				<div className="bg-zinc-50 sm:w-1/2 mx-auto">{children}</div>
			</body>
		</html>
	);
}
