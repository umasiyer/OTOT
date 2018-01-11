import { createStore, applyMiddleware  } from 'redux';
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/sagas'

const sagaMiddleware = createSagaMiddleware();
export default function configureStore(initialState) {

    
    const storeInstance =  createStore(
        reducer,
        initialState,
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga)
    return storeInstance;
}

//TODO: Add lines to run the sagamiddleware that constitutes the root saga