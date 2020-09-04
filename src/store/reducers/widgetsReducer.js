const widgetsReducer = (state={}, action) => {

    if(!action?.payload?.route) return state;
    let { layouts, data, route } = action.payload;
    switch (route) {
        case 'dashboard': {
            switch (action.type) {
                case 'SET_WIDGETS': return { ...state, dashboard: { ...state.dashboard, data }};
                case 'RESET_WIDGETS': return { ...state, dashboard: { ...state.dashboard, layouts, data } };
                default: return state;
            }
        }

        default: return state;
    }
}

export default widgetsReducer;