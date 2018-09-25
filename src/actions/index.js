import * as t from './actionTypes';

export const setIsLoadedfalse = () => {
    return { type: t.SET_ISLOADED_FALSE, payload: null }
}

export const setTweets = (tweeter) => {
    return { type: t.SET_TWEETS, tweeter }
}