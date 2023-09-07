import {AppType} from "@/context/app/type";
import Firebase from "@/libs/firebase/firebase";
import {NextApiRequest} from "next";
import {NextResponse} from "next/server";

const DB = Firebase<AppType>({colName: "worksplace"});

export async function GET(req: Request) {
	const {searchParams} = new URL(req.url);
	const id = searchParams.get("id");

	if (id == null) {
		// return all items in collection
		const items = await DB.GetDocs();
		return NextResponse.json(items);
	}

	// return one item (document)
	const response = await DB.GetDoc({docName: id});
	return NextResponse.json(response);
}

export async function POST(req: Request) {
	const body = await req.json();

	const response = DB.SetDoc({data: body, id: body.id});

	return NextResponse.json(response);
}

export async function PATCH(req: Request) {
	const body = await req.json();

	const response = DB.SetDoc({data: body, id: body.id});
	return NextResponse.json(response);
}
