import {AppType, AppActionType, init} from "./type";
import {CreateContext, CreateReducer} from "@/context/Context";

function HandleReducer(app: AppType, action: AppActionType): AppType {
	return app;
}

export const {
	Reducer,
	contextProvider,
	dispatchProvider,
	useHandleContext: useAppContext,
	useHandleDispatchContext: useAppDispatchContext,
} = CreateContext<AppType, AppActionType>(HandleReducer, init);
