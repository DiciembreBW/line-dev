import Random from "@/libs/utilities/Random";
import {AppType, AppActionType, init} from "./type";
import {CreateContext, CreateReducer} from "@/context/Context";

function HandleReducer(app: AppType, action: AppActionType): AppType {
	const {id} = action;
	switch (id?.type) {
		case "": {
			return {...app, id: Random.id()};
		}
		default: {
			console.log(id);
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
