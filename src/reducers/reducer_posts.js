import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions'

export default function(state = {}, action) {
    switch (action.type) {
        case DELETE_POST:
        return_.omit(state, action.payload)
        //to delete the deleted id from your record
        case FETCH_POST:
            // const post = action.payload.data
            // const newState =  {...state}
            // newState[post.id] = post;

            return { ...state, [action.payload.data.id]: action.payload.data}
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id')
        default:
        return state;
    }
}