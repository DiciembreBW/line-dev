import {AppType} from "@/context/app/type";
import Firebase from "@/libs/firebase/firebase";
import {NextApiRequest} from "next";
import {NextResponse} from "next/server";

const DB = Firebase<AppType>({colName: "worksplace"});

export async function GET(req: Request) {
	const {searchParams} = new URL(req.url);
	const id = searchParams.get("id");

	// switch (id) {
	// 	case null: {
	// 		return NextResponse.json({value: "id is null"});
	// 	}

	// 	default: {
	// 		return DB.GetDoc({docName: `/${id}`}).then((reponse) => {
	// 			return NextResponse.json({name: "pass"});
	// 		});
	// 	}
	// }

	if (id == null) return NextResponse.json(id);

	const response = await DB.GetDoc({docName: id});
	return NextResponse.json(response);
}

export async function POST(req: Request) {
	const body = await req.json();

	const responze = DB.SetDoc({data: body, id: body.id});

	return NextResponse.json(responze);
}
