// import {Dispatch, createContext, useContext} from "react";
import {Dispatch, createContext, useContext} from "react";
import {AppType, AppActionType} from "./AppReducer";

export const AppContext = createContext<AppType>({user: {}});
export const AppDispatchContext = createContext<Dispatch<AppActionType>>(
	() => {}
);

export function useAppContext() {
	return useContext(AppContext);
}

export function useAppDispatchContext() {
	return useContext(AppDispatchContext);
}
