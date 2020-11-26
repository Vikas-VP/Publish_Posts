import * as ACTION_TYPES from '../actions/actiontypes';

const defaultState = {
    post: [],
    searchValue: '',
}

export default function projectsReducer(state = defaultState, action) {
    switch (action.type) {
    case ACTION_TYPES.ADD_POST:
        return {
            ...state,
            post: state.post.concat({ title: action.payload.title, description: action.payload.description }),
        }
    case ACTION_TYPES.SEARCH_ITEMS:
        return {
            ...state,
            searchValue: action.payload, 
        }
    default:
        return state;
    }
}