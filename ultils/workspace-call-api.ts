import {AppType} from "@/context/app/type";
const URL = "https://line-dev-smoky.vercel.app"; // production
// const URL = "http://localhost:3000"; // dev
// const URL = "https://a982-182-52-231-195.ngrok-free.app";
// const URL = "https://1999-182-52-231-195.ngrok-free.app";

const CallAPI = {
	//  create workspace item
	async createItem(value: AppType) {
		const response = await fetch(`${URL}/api/workspace/`, {
			method: "POST",
			body: JSON.stringify(value),
			headers: {
				"Content-Type": "application/json",
			},
		});

		return await response.json();
	},

	async getItems(): Promise<AppType[]> {
		const response = await fetch(`${URL}/api/workspace`, {cache: "no-store"});

		return await response.json();
	},

	//  get workspace item
	async getItem(id: string) {
		const response = await fetch(`${URL}/api/workspace?id=${id}`, {
			cache: "no-cache",
		});
		return await response.json();

		// return `${process.env.HOST_URL || ""}/api/workspace?id=${id}`;
	},

	async updateItem(value: AppType) {
		const response = await fetch(`${URL}/api/workspace`, {
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
