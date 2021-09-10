import {createStore, applyMiddleware, compose} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from "./reducer";
import rootSaga from "./saga";


export const history = createBrowserHistory();

function configureStore(data) {
    const router = routerMiddleware(history);
    const saga = createSagaMiddleware();
    const middleware = [router, saga];

    const store = createStore(
        createRootReducer(history),
        data,
        composeWithDevTools(
            applyMiddleware(...middleware),
            // window.__REDUX_DEVTOOLS_EXTENSTION__ ? window.__REDUX_DEVTOOLS_EXTENSTION__({
            //     name: '/', actionsBlacklist: ['REDUX_STORAGE_SAVE']
            // }) : noop => noop
        )
    );

    saga.run(rootSaga);

    return store;
}

export default configureStore();
