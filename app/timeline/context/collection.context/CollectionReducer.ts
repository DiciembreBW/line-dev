import {
	CollectionType,
	CollectionActionType,
	initCollectionValue,
} from "./types";
import {CreateContext} from "../../Context";

function handle(
	collection: CollectionType,
	action: CollectionActionType
): CollectionType {
	// switch () {

	// }

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
