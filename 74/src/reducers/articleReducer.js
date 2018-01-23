export default function reducer(state={}, action){
    switch(action.type){
        case "FETCH_ARTICLES_SUCCESS":
            {
                return { ...state, items: action.payload.hits };
            }
        case "FETCH_ARTICLES_ERRORED":
            {
                return { ...state, hasErrored: action.hasErrored}
            }
        default:
            {
                return state;
            }
    }
}