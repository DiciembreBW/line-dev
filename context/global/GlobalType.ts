export type UserProfile = {
	id?: string;
	name?: string;
	picture?: string;
};

export type GlobalType = {
	user?: UserProfile;
};

export type GlobalActionType = {};

export const GlobalInit: GlobalType = {
	user: {
		id: "",
		name: "",
		picture: "",
	},
};
