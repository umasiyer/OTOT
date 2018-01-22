import axios from 'axios'
import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

//Folder src: /src/sagas/sagas.js
// THIS WILL ACT AS OUR COMBINED SAGA FILE FOR SIMPLICITY
/*
THIS SECTION CONTAINS THREE PARTS
1. Worker Saga
2. Watcher Saga
3. Root Saga
*/

//NOTE:----------- Sagas contain generator functions------------------

// Worker saga - THis saga will try the api call and return the response.

function* getArticlesAsync(action){
    try {
        const response = yield call(axios.get, action.payload );
        yield put({ type: 'FETCH_ARTICLES_SUCCESS', payload: response.data });
    } catch ( e ) {
        console.log('Error Occured');
        yield put({ type: 'FETCH_ARTICLES_ERRORED', e });
    }
}


// Watcher saga - This saga will watch for specific actions dispatched. 

export function* getArticles() {
    console.log('redux saga is listenign to FETCH action');
    yield takeEvery('FETCH_ARTICLES',getArticlesAsync)   // Params: Action to listen, the worker saga that needs to be called
}

//Root Saga - This is the saga that will combine export all sagas

export default function* rootSaga() {
    yield [getArticles()]  // Here add the list of watcher sagas. 
}
