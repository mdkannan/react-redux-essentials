
export function showlist() {
  return dispatch => {
    dispatch({
      type: "SHOW_List"
    });
  };
}


export function showtable() {
    return dispatch => {
        dispatch({
            type: "SHOW_List",
            payload: false
        });
    };
}


export function oslo_population(value) {
  return dispatch => {
    dispatch({
      type: "OSLO_POPULATION",
      payload: value
    });
  };
}
