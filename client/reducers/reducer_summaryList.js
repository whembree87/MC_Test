import _ from 'lodash';
import { FETCH_ALL_SUMMARIES, DELETE_SUMMARY } from "../actions/database";

export default function(state = {}, action) {
    switch(action.type) {
        case DELETE_SUMMARY:
            return _.omit(state, action.payload);

        case FETCH_ALL_SUMMARIES:
            return _.mapKeys(action.payload.data, '_id');

        default: return state;
    }
}