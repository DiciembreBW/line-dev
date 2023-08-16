import {OrderType} from "../types/order_type";
import {UserProfileType} from "../contexts/app.context/AppReducer";
import Firebase from "../firebase/firebase";
import Host from "./Host";

const db = Firebase({colName: "Order"});

const Order = {
	sum({order}: {order: OrderType}): number {
		if (order.sleeve == undefined) return 0;

		const resault = order.sleeve?.label.reduce((perriod, current) => {
			const value = typeof current.amont == "string" ? 0 : current.amont;
			return perriod + value;
		}, 0);

		return resault;
	},

	getUser: async ({id, data}: {id: string; data: UserProfileType}) => {
		const isUser = await db.GetDoc({docName: `/${id}`});

		if (isUser == undefined || null) {
			return await db.SetDoc({data, id});
		}

		return isUser;
	},

	createOrder: async ({id, data}: {id: string; data: OrderType}) => {
		return await db.SetDoc({id, data});
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

export default Order;
