export type AppType = {
	id: string;
	counter: number;
	init: boolean;
	address: string;
};
export type AppActionType = {
	app?: {
		type: "create" | "update";
		value: AppType;
	};

	counter?: {
		type: "up" | "down" | "reset";
	};
};
export const init: AppType = {
	id: "",
	counter: 0,
	init: false,
	address: "",
};
