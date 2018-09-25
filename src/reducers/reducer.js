import * as t  from '../actions/actionTypes';
const INITIAL_STATE = {
    tweets: [],
    isLoaded: true
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case t.setTweetsAsync: return { tweets: action.tweets, isLoaded: true };
        case t.SET_ISLOADED_FALSE: return { tweets: [], isLoaded: false };
        default: return state;
    }
};