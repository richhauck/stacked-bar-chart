import { DATA_LOADED } from "../constants/action-types";
const initialState = {
    beforeData:{},
    afterData:{},
    isLoaded: false
};
function rootReducer(state = initialState, action){
    if(action.type === DATA_LOADED){
        return Object.assign({}, state, {
            beforeData: action.payload.Before,
            afterData: action.payload.After,
            isLoaded: true
        });
    }
    return state;
}
export default rootReducer;