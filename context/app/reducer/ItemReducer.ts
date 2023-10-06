import {AppActionType, AppType, ListType} from "../type";

export default function ItemReducer(
	app: AppType,
	action: AppActionType
): AppType {
	if (action.items == undefined) return app;
	const {type, value} = action.items;

	// item
	switch (action.items?.type) {
		case "create": {
			return {...app, items: [action.items.value, ...app.items]};
		}
		case "remove": {
			return {
				...app,
				items: app.items.filter((item) => item.id !== action.items?.value.id),
			};
		}
		case "update": {
			console.log(value);

			return app;
		}
		default: {
			return app;
		}
	}
}
