import {
	CollectionType,
	CollectionActionType,
	initCollectionValue,
	SleeveType,
} from "./types";
import {CreateContext} from "../../Context";
import Random from "@/libs/utilities/Random";

function handle(
	collection: CollectionType,
	action: CollectionActionType
): CollectionType {
	// switch () {

	// }
	const {sleeve} = action;

	switch (action.name?.type) {
		case "onchange": {
			return {...collection, name: action.name.value};
		}
	}

	switch (action.item?.type) {
		case "create": {
			const value = action.item.value;

			return {...collection, items: [value, ...collection.items]};
		}
		case "update": {
			// return {
			// 	...collection,
			// 	items: collection.items.map((item, index) => {
			// 		if (item.id == action.item?.value.id) {
			// 			item = action.item.value;
			// 			return item;
			// 		}

			// 		return item;
			// 	}),
			// };
			console.log("Item type update");
		}
	}

	switch (sleeve?.type) {
		case "update": {
			// console.log(`action value is ${(sleeve.item, sleeve.label)}`);
			// console.log(sleeve.item);

			// console.log(collection.items);
			const selectedList = collection.items.filter((item) => {
				if (item.id == sleeve.id) {
					item.counter++;
					item.lists = sleeve.value
					// item.lists = item.lists.map((i) => {
					// 	if (i.label == sleeve.label.label) {
					// 		i.amont++;
					// 	}
					// 	return i;
					// });
					return item;
				}
			});

			// console.log(selectedList);
			return {...collection};

			// return collection
			// return {
			// 	...collection,
			// 	items: collection.items.map((item, index) => {
			// 		if (item.id == sleeve.id) {
			// 			item.lists = item.lists.map((a, b) => {
			// 				if (a.label == sleeve.label.label) {
			// 					a.amont++;
			// 				}
			// 				return a;
			// 			});
			// 		}
			// 		return item;
			// 	}),
			// };
		}
	}

	switch (action.status?.type) {
		case "onchange": {
			return {...collection, status: action.status.value};
		}
	}

	switch (action.address?.type) {
		case "onchange": {
			return {...collection, address: action.address.value};
		}
	}

	switch (action.material?.type) {
		case "update": {
			return {
				...collection,
				items: collection.items.map((item, index) => {
					if (action.material) {
						if (index == action.material.index) {
							item.material = action.material.value;
							// console.log(item.material);
						}
						// item.material = action.material.value;
						// console.log(`position of item :  ${index}`);
						// console.log(`material index :  ${action.material.index}`);
					}
					return item;
				}),
			};
		}
	}

	return collection;
}

export const {
	Reducer,
	contextProvider,
	dispatchProvider,
	useHandleContext: useCollectionContext,
	useHandleDispatchContext: useCollectionDispatchContext,
} = CreateContext<CollectionType, CollectionActionType>(
	handle,
	initCollectionValue
);
