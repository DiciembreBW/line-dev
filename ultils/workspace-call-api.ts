import {AppType} from "@/context/app/type";

const CallAPI = {
	//  create workspace item
	async createItem(value: AppType) {
		const response = await fetch(`${process.env.HOST_URL || ""}/api/workspace/`, {
			method: "POST",
			body: JSON.stringify(value),
			headers: {
				"Content-Type": "application/json",
			},
		});

		return await response.json();
	},

	//  get workspace item
	async getItem(id: string) {
		const response = await fetch(
			`${process.env.HOST_URL || ""}/api/workspace?id=${id}`,
			{cache: "no-cache"}
		);
		return await response.json();

		// return `${process.env.HOST_URL || ""}/api/workspace?id=${id}`;
	},

	async updateItem(value: AppType) {
		const response = await fetch(`${process.env.HOST_URL || ""}/api/workspace`, {
			method: "PATCH",
			body: JSON.stringify(value),
			headers: {
				"Content-Type": "application/json",
			},
		});

		return await response.json();
	},
};

export default CallAPI;
