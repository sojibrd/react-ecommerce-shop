import { compose, createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { rootReducer } from "./root-reducer";
// import { myLogger } from "../middlewares/logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { thunk } from "redux-thunk";

const middleWares = [process.env.NODE_ENV !== "production" && logger, thunk].filter(
  Boolean
);

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composedEnhancer = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancer);
export const persistor = persistStore(store);
