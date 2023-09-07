export type AppType = {id: string; counter: number};
export type AppActionType = {
	app?: {
		type: "create";
		value: AppType;
	};

	counter?: {
		type: "up" | "down" | "reset";
	};
};
export const init: AppType = {id: "my_id", counter: 0};
