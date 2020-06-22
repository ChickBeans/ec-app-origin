import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from "redux"
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {UsersReducer} from '../users/reducers';

// history:reactアプリないで今どの場所にいるのか
export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            // products: ProductsReducer
            // router:historyを管理する
            router: connectRouter(history),
            users: UsersReducer
        }),
        applyMiddleware(
            routerMiddleware(history)
        )
    )
}