import {UserProfileType} from "../contexts/app.context/AppReducer";
import Firebase from "../firebase/firebase";
import Host from "./Host";

const db = Firebase({colName: "Customers"});

const Customer = {
	getUser: async ({id, data}: {id: string; data: UserProfileType}) => {
		const isUser = await db.GetDoc({docName: `/${id}`});

		if (isUser == undefined || null) {
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
};

export default Customer;
