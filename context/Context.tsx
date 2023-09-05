import {Dispatch, createContext, useContext, useReducer} from "react";

export function CreateContext<Type, Action>(
	PendingReducer: (state: Type, action: Action) => Type,
	init: Type
) {
	const contextProvider = createContext<Type>(init);
	const dispatchProvider = createContext<Dispatch<Action>>(() => {});

	function useHandleContext() {
		return useContext(contextProvider);
	}

	function useHandleDispatchContext() {
		return useContext(dispatchProvider);
	}

	return {
		contextProvider,
		dispatchProvider,
		useHandleContext,
		useHandleDispatchContext,
		Reducer: PendingReducer,
	};
}

export function CreateReducer<Type, Action>(
	Reducer: (state: Type, action: Action) => Type,
	init: Type
) {
	const [state, dispatch] = useReducer(Reducer, init);
	return {state, dispatch};
}
