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
	async getItem(id: string): Promise<AppType> {
		const response = await fetch(
			`${process.env.HOST_URL || ""}/api/workspace?id=${id}`
		);
		const data = await response.json();
		return data;
	},
};

export default CallAPI;
