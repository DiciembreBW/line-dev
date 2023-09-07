import Random from "@/libs/utilities/Random";
import {AppType, AppActionType, init} from "./type";
import {CreateContext, CreateReducer} from "@/context/Context";
import CallAPI from "@/ultils/workspace-call-api";

function HandleReducer(app: AppType, action: AppActionType): AppType {
	switch (action.app?.type) {
		case "create": {
			CallAPI.createItem(action.app.value);
			return app;
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
	return app;
}

export const {
	Reducer,
	contextProvider,
	dispatchProvider,
	useHandleContext: useAppContext,
	useHandleDispatchContext: useAppDispatchContext,
} = CreateContext<AppType, AppActionType>(HandleReducer, init);
