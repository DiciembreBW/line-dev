import ItemConterReducer from "./reducer/ItemConterReducer";
import ItemsListsReducer from "./reducer/ItemsListsReducer";
import MaterialReducer from "./reducer/MaterialReducer";
import {AppType, AppActionType, init} from "./type";
import {CreateContext} from "@/context/Context";
// import CallAPI from "@/ultils/workspace-call-api";

function HandleReducer(app: AppType, action: AppActionType): AppType {
	switch (action.app?.type) {
		case "create": {
			// CallAPI.createItem(action.app.value);
			console.log(action.app.value);

			return app;
		}
		case "update": {
			return {
				...app,
				address: action.app.value.address,
			};
		}
		default: {
		}
	}

	switch (action.counter?.type) {
		case "up": {
			return {...app, counter: app.counter + 1};
		}

		case "down": {
			// if (app.counter)
			const counter = app.counter < 1 ? 0 : app.counter - 1;
			return {...app, counter: counter};
		}

		case "reset": {
			return {...app, counter: 0};
		}
	}

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
	}

	// Reducer fn
	if (action.items_counter) return ItemConterReducer(app, action);
	if (action.items_lists) return ItemsListsReducer(app, action);
	if (action.material) return MaterialReducer(app, action);

	return app;
}

export const {
	Reducer,
	contextProvider,
	dispatchProvider,
	useHandleContext: useAppContext,
	useHandleDispatchContext: useAppDispatchContext,
} = CreateContext<AppType, AppActionType>(HandleReducer, init);
