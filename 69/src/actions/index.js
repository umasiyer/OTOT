
export function fetchArticlesSuccess(items){
    return {
        type: "FETCH_USERS_SUCCESS",
        payload: items
    }
}

export function fetchHasErrored(bool) {
    return {
        type: 'FETCH_USERS_ERRORED',
        hasErrored: bool
    };
}

export function fetchArticles(url) {
    return (dispatch) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(fetchArticlesSuccess(items)))
            .catch(() => dispatch(fetchHasErrored(true)));
    };
}