import React, { FC, createContext, ReactNode, ReactElement } from "react";
import { GlobalStateStore } from "./GlobalStateStore";

export const StoreContext = createContext<GlobalStateStore>(
    {} as GlobalStateStore
);

export type StoreComponent = FC<{
    store: GlobalStateStore;
    children: ReactNode;
}>;

export const StoreProvider: StoreComponent = ({
    store,
    children,
}): ReactElement => {
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};
