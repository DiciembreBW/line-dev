import {UserProfileType} from "../contexts/app.context/AppReducer";
import Firebase from "../firebase/firebase";
import Host from "./Host";

const url = `${Host.url()}/api/auth`;
const db = Firebase({colName: "Users"});

const Request = {
	post: async () => {
		const response = await fetch(url, {
			method: "POST",
			body: JSON.stringify({id: "1234"}),
			headers: {
				"Content-Type": "application/json",
			},
		});

		return await response.json();
	},

	passId: async (id: string) => {
		const response = await fetch(url, {
			method: "POST",
			body: JSON.stringify(id),
			headers: {
				"Content-Type": "application/json",
			},
		});

		return await response.json();
	},

	getUser: async ({id, data}: {id: string; data: UserProfileType}) => {
		const isUser = await db.GetDoc({docName: `/${id}`});

		if (isUser == undefined) {
			return await db.SetDoc({data, id});
		}

		return isUser;
	},

	updateUserProfile: async ({
		id,
		data,
	}: {
		id: string;
		data: UserProfileType;
	}): Promise<undefined | string> => {
		const isUser = await db.GetDoc({docName: `/${id}`});

		if (isUser == null) return undefined; // should return undefiend when no user
		return await db.SetDoc({data, id}); // return userid
	},

	something: async (user: UserProfileType) => {
		const response = db.GetDoc({docName: `/${user.userId}`});
		console.log(response);
		return await response;
	},
};

export default Request;
