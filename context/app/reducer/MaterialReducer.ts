import {AppActionType, AppType, ListType, MaterialType} from "../type";

export default function MaterialReducer(
	app: AppType,
	action: AppActionType
): AppType {
	if (action.material == undefined) return app;
	const {type, id, value} = action.material;

	switch (type) {
		case "create": {
			// console.log(value);
			Select(app, id, () => {
				return value;
			});

			return {...app};
		}
		case "remove": {
			console.log(value);
			return {...app};
		}
		default: {
			return app;
		}
	}
}

function Select(
	app: AppType,
	id: string,
	PenddingCallback: (material: MaterialType) => MaterialType
) {
	return app.items.map((item) => {
		// select id
		if (item.id == id) {
			// item.lists.map((mat) => {
			// select label
			// console.log(mat);

			// listitem = PenddingCallback(listitem);
			// });
			item.material = PenddingCallback(item.material);
		}

		return item;
	});
}

// if (listitem.label == value.label) {
// 					// assgin amogn
// 					listitem.amont = listitem.amont + 1;
// 				}
