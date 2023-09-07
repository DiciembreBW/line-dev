import {NextResponse} from "next/server";

export function GET(req: Request) {
	const {searchParams} = new URL(req.url);
	const id = searchParams.get("id");

	switch (id) {
		case null: {
			return NextResponse.json({value: "id is null"});
		}

		default: {
			return NextResponse.json({value: id});
		}
	}
}

export function POST(req: Request) {
	return NextResponse.json({value: "pass"});
}
