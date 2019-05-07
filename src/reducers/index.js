import { DATA_LOADED, CHANGE_VIEW_MODE} from "../constants/action-types";
const initialState = {
    beforeData:{},
    afterData:{},
    isLoaded: false,
    viewMode: 'All'
};
function rootReducer(state = initialState, action){
    if(action.type === DATA_LOADED){
        return Object.assign({}, state, {
            beforeData: action.payload.Before,
            afterData: action.payload.After,
            isLoaded: true
        });
    }
    if(action.type === CHANGE_VIEW_MODE){
        return Object.assign({}, state, {
            viewMode: action.payload
        });
    }
    return state;
}
export default rootReducer;