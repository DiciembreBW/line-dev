import {
	DocumentData,
	DocumentReference,
	DocumentSnapshot,
	QueryDocumentSnapshot,
	QuerySnapshot,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	onSnapshot,
	orderBy,
	query,
	setDoc,
	where,
} from "firebase/firestore";

import {
	StorageReference,
	UploadResult,
	deleteObject,
	getDownloadURL,
	getStorage,
	listAll,
	ref,
	uploadBytes,
} from "firebase/storage";
import app from "./init";
import Chance from "chance";
import {v4} from "uuid";

// database
const db = getFirestore(app);

// storage
const storage = getStorage(app);

// random change
const chance = new Chance();

export function SetDoc({docName, data}: {docName: string; data: object}): void {
	const docRef = doc(db, docName);
	console.log("pass");
	setDoc(docRef, data);
}

export function SetDocMerge({
	docName,
	data,
}: {
	docName: string;
	data: object;
}): void {
	const docRef = doc(db, docName);
	setDoc(docRef, data, {merge: true});
}

export async function DeleteDoc({docName}: {docName: string}) {
	const docRef = doc(db, docName);
	await deleteDoc(docRef).then((r) => console.log(r));
}

export async function GetDoc({docName}: {docName: string}) {
	const docRef = doc(db, docName);
	const docSnap = await getDoc(docRef);

	return docSnap.exists() ? docSnap.data() : null;
}

export async function GetDocs(
	docName: string,
	penddingCallback: (query: QueryDocumentSnapshot) => void
) {
	const docRef = collection(db, docName);

	const querySnapshot = await getDocs(docRef);
	querySnapshot.forEach((query) => penddingCallback(query));
}

//

function getQuerySnapshot<T>(querySnapshot: QuerySnapshot): T {
	let data: T | any = [];
	querySnapshot.forEach((query) => {
		if (query.exists()) {
			data.push(query.data());
		}
	});

	return data;
}

function getQueryDoc<T>(query: DocumentSnapshot): T {
	let data: T | any = query.exists() ? query.data() : null;
	return data;
}

async function getImageItems(items: StorageReference[]) {
	const x = items.forEach(async (item, index) => {
		const urls: string[] | null = [];
		const url = await getDownloadURL(item);
		// push
		urls.push(url);

		return urls;

		// return when read all
		// if (index == items.length - 1) {
		// 	return urls;
		// }
	});

	console.log(x);

	// return [];
}

// storage
export function myStorage(pathName: string) {
	// path in google storage
	const path = pathName || "images";

	// path ref
	const pathRef = ref(storage, `${path}/`);

	// return
	return {
		upload: (image: File): Promise<UploadResult> => {
			// file name + uuid
			const name = image.name + v4();

			// image ref
			const imageRef = ref(storage, `${path}/${name}`);

			// upload
			return uploadBytes(imageRef, image).then((response) => {
				// console.log(`${response}  uploaded`);
				return response;
			});
		},

		// list all item
		getItems: async (PenddingCallback: (url: string) => void) => {
			const response = await listAll(pathRef);

			response.items.forEach(async (item) => {
				const url = await getDownloadURL(item);

				PenddingCallback(url);
			});
		},

		// remove
		removeItem: (fileName: string, PenddingCallback: () => void) => {
			const imageRef = ref(storage, `${fileName}`);
			// console.log(imageRef);
			deleteObject(imageRef)
				.then((r) => {
					// console.log(`${fileName} removed`);
					// console.log(r);
					PenddingCallback();
				})
				.catch((error) => {
					console.log(error);
				});
		},
	};
}

// export default
export default function Firebase<T>({colName}: {colName: string}) {
	const colRef = collection(db, colName);

	return {
		//   get docs
		QueryDocsSort: async function (option: "asc" | "desc"): Promise<T[]> {
			const q = query(colRef, orderBy("create_at", option));
			const querySnapshot = await getDocs(q);
			return getQuerySnapshot(querySnapshot);
		},
		//   get docs
		GetDocs: async function (): Promise<T[]> {
			const querySnapshot = await getDocs(colRef);
			return getQuerySnapshot(querySnapshot);
		},

		// get doc
		GetDoc: async function ({docName}: {docName: string}): Promise<T> {
			const docRef = doc(db, colName + "/" + docName);
			const docSnap = await getDoc(docRef);

			// return docSnap.data();
			return getQueryDoc(docSnap);
		},

		OnSnapShot: function <X>({docName}: {docName: string}, pendding: Function) {
			const docRef = doc(db, colName + docName);
			onSnapshot(docRef, (snap) => {
				if (snap.exists()) {
					pendding(snap.data());
				}
			});
		},

		// set doc
		SetDoc: function ({data, id}: {data: T; id: string}) {
			const docRef = doc(db, colName + "/" + id);
			setDoc(docRef, {...data, id});

			return id;
		},

		// remove
		DeleteDoc: async function ({docName}: {docName: string}) {
			const docRef = doc(db, colName + "/" + docName);
			await deleteDoc(docRef).then((r) => console.log(r));
		},
	};
}

function randomId(): string {
	return chance.string({
		length: 16,
		casing: "lower",
		alpha: true,
		numeric: true,
	});
}
