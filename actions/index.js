import fetch from 'isomorphic-fetch';

export const SOME_CONSTANT = 'SOME_CONSTANT';
export const REQUEST_SOMETHING = 'REQUEST_SOMETHING';
export const RECEIVE_SOMETHING = 'RECEIVE_SOMETHING';

export function fetchSomething (some_id=1) {
  return (dispatch) => {
    return dispatch(doFetchSomething(some_id));
  };
}

function doFetchSomething (some_id) {
  return dispatch => {
    dispatch(requestSomething(some_id));

    return fetch(`/something/${some_id}`, {
        credentials: 'same-origin'
      })
      .then(req => req.json())
      .then(json => dispatch(receiveSomething(some_id, json)));
  };
}

function requestSomething (some_id) {
  return {
    type: REQUEST_SOMETHING,
    some_id
  };
}

function receiveSomething (some_id, json) {
  return {
    type: RECEIVE_SOMETHING,
    some_id: some_id,
    something: json.something,
    receivedAt: Date.now()
  };
}
achie