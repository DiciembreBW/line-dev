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
	return app;
}

export const {
	Reducer,
	contextProvider,
	dispatchProvider,
	useHandleContext: useAppContext,
	useHandleDispatchContext: useAppDispatchContext,
} = CreateContext<AppType, AppActionType>(HandleReducer, init);
