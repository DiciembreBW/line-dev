export type AppType = {
	text?: string;
	user?: UserProfileType;
};
export type AppActionType = {
	text?: {
		type: "edit";
		value: string;
	};
	user?: {
		type: "update";
		user: UserProfileType;
	};
};

export function AppReducer(app: AppType, action: AppActionType): AppType {
	const {user, text} = action;

	if (user) {
		switch (user.type) {
			case "update": {
				return {...app, user: action.user?.user};
			}
			default:
				return app;
		}
	}

	return app;
}

export type UserProfileType = {
	displayName?: string;
	pictureUrl?: string;
	statusMessage?: string;
	userId?: string;
	email?: string;
	tel?: string;
	address?: string;
};
