import {AppActionType, AppType} from "../type";

export default function ItemConterReducer(
	app: AppType,
	action: AppActionType
): AppType {
	switch (action.items_counter?.type) {
		case "up": {
			return {
				...app,
				items: app.items.map((item) => {
					if (item.id == action.items_counter?.id) {
						item.conter = item.conter + 1;
					}
					return item;
				}),
			};
		}
		case "down": {
			return {
				...app,
				items: app.items.map((item) => {
					if (item.id == action.items_counter?.id) {
						item.conter = item.conter < 1 ? item.conter : item.conter - 1;
					}
					return item;
				}),
			};
		}
		default: {
			return app;
		}
	}
}
