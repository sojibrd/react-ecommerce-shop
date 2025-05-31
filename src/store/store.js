import { compose, createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { rootReducer } from "./root-reducer";

const myLogger = (store) => (next)=>(action)=>{
    if (!action.type) {
        next(action)
    }

    console.log('type', action.type);
    console.log('current state', store.getState() );

    next(action);
    console.log('next state', store.getState());
    
}

const middleWares = [myLogger,logger];

const composedEnhancer = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, undefined, composedEnhancer);
