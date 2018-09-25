import { takeLatest, put } from 'redux-saga';
import * as t from '../actions/actionTypes';
import { getTweets } from '../api';

function* setTweetsAsync(action) {
    try {
        const tweets = yield call(getTweets, action.tweeter);
        yield put({ type: t.SET_TWEETS_ASYNC, tweets: tweets })
    } catch (e) {
        console.log(e);
    }
}

export function* watchTweets() {
    yield takeLatest(t.SET_TWEETS, setTweetsAsync);
}