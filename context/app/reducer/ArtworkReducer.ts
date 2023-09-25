import {AppActionType, AppType} from "../type";

export default function ArtworkReducer(
	app: AppType,
	action: AppActionType
): AppType {
	if (action.artwork == undefined) return app;

	const {type, value, itemId} = action.artwork;

	switch (type) {
		case "upload": {
			const items = app.items.map((item) => {
				if (item.id == itemId) {
					// console.log(item);

					return {
						...item,
						artwork: value,
					};
				}

				return item;
			});

			return {...app, items};
		}
		default: {
			return app;
		}
	}
}
