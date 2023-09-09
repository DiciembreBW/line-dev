import {CreateContext} from "../Context";
import {GlobalActionType, GlobalType, GlobalInit} from "./GlobalType";
function Handle(global: GlobalType, action: GlobalActionType): GlobalType {
	return global;
}

export const {
	Reducer,
	contextProvider,
	dispatchProvider,
	useHandleContext: useGlobalContext,
	useHandleDispatchContext: useGlobalDispatchContext,
} = CreateContext<GlobalType, GlobalActionType>(Handle, GlobalInit);
