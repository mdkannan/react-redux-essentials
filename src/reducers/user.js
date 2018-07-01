export default function userReducer(state = {

                                          showlist:false,
                                          population:500000,

                                      }, action) {

    switch (action.type) {

// Show Chart
            case "SHOW_List":

                state = {...state, showlist : !state.showlist};
                break;

/////////////Second
case "OSLO_POPULATION":

    state = {...state, population: action.payload};
    break;

    }
    return state;
}
