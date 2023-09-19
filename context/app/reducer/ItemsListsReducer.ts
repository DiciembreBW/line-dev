import {AppActionType, AppType, ListType} from "../type";

export default function ItemsListsReducer(
	app: AppType,
	action: AppActionType
): AppType {
	if (action.items_lists == undefined) return app;
	const {type, id, value, amont} = action.items_lists;

	switch (type) {
		case "set": {
			// console.log(amont);
			const items = StepAmont(app, id, (list) => {
				if (list.label == value?.label) {
					list.amont = amont || 0;

					return list;
				}

				return list;
			});

			return {...app, items};
		}
		case "up": {
			if (value == undefined) return app;

			const items = StepAmont(app, id, (list) => {
				if (list.label == value.label) {
					list.amont = list.amont + 1;
					return list;
				}

				return list;
			});

			// assign value
			return {...app, items};
		}

		case "down": {
			if (value == undefined) return app;
			const items = StepAmont(app, id, (list) => {
				if (list.label == value.label) {
					list.amont = list.amont < 1 ? 0 : list.amont - 1;
					return list;
				}

				return list;
			});

			// assign value
			return {...app, items};
		}

		case "setzero": {
			if (value == undefined) return app;

			const items = StepAmont(app, id, (list) => {
				if (list.label == value.label) {
					list.amont = 0;
					return list;
				}

				return list;
			});

			// assign value
			return {...app, items};
		}

		case "reset": {
			const items = StepAmont(app, id, (list) => {
				list.amont = 0;

				return list;
			});

			// assign value
			return {...app, items};
		}

		default: {
			return app;
		}
	}
}

function StepAmont(
	app: AppType,
	id: string,
	PenddingCallback: (listitem: ListType) => ListType
) {
	return app.items.map((item) => {
		// select id
		if (item.id == id) {
			item.lists.map((listitem) => {
				// select label
				listitem = PenddingCallback(listitem);
			});
		}

		return item;
	});
}

// if (listitem.label == value.label) {
// 					// assgin amogn
// 					listitem.amont = listitem.amont + 1;
// 				}
