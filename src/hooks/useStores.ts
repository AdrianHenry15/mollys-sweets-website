import { useContext } from "react";
import { GlobalStateStore } from "../stateStore/GlobalStateStore";
import { StoreContext } from "../stateStore/StateStoreProvider";

export const useStores = (): GlobalStateStore => useContext(StoreContext);
