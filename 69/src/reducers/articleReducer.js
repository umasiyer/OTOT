export default function reducer(state={}, action){
    switch(action.type){
        case "FETCH_USERS_SUCCESS":
            {
                return { ...state, items: action.payload.hits };
            }
        case "FETCH_USERS_ERRORED":
            {
                return { ...state, hasErrored: action.hasErrored}
            }
        default:
            {
                return state;
            }
    }
}