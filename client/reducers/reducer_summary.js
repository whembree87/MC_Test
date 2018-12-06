import { FETCH_SUMMARY } from "../actions/index";

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_SUMMARY :
            return action.payload.data;
        default: return state;
    }
}