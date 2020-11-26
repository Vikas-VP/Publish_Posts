import { actionCreator } from '../utils/utils';
import * as ACTION_TYPES from './actiontypes';

export function addPost(payload) {
    return (dispatch) => {
        dispatch(actionCreator(ACTION_TYPES.ADD_POST, payload))
    }
}

export function searchItem(payload) {
    debugger
    return (dispatch) => {
        dispatch(actionCreator(ACTION_TYPES.SEARCH_ITEMS, payload))
    }
}