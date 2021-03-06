import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';

const sagaMidleware = createSagaMiddleware();

const middlewares = [sagaMidleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMidleware.run(rootSaga);


export const persistor = persistStore(store);

export default { store, persistStore };