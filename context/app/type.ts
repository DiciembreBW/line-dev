export type AppType = {id: string; counter: number};
export type AppActionType = {
	id?: {
		type: string | "create";
	};
};
export const init: AppType = {id: "my_id", counter: 0};
