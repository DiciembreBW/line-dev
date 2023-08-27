import {
	CollectionType,
	CollectionActionType,
	initValue,
	initCollectionValue,
} from "./types";
import {CreateContext} from "../../Context";

function handle(
	collection: CollectionType,
	action: CollectionActionType
): CollectionType {
	switch (action.name?.type) {
		case "onchange": {
			return {...collection, name: action.name.value};
		}
	}

	switch (action.item?.type) {
		case "create": {
			const value = action.item.value;
			return {...collection, item: [value, ...collection.item]};
		}
	}

	switch (action.status?.type) {
		case "onchange": {
			return {...collection, status: action.status.value};
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
