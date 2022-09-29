import {DECREMENT, GET_POSTS, INCREMENT} from '../actions/actions';

export const INITIAL_STATE = {
  Posts: [],
  loading: false,
  counter: 0,
};

const counter = (state = INITIAL_STATE, action: {type: string; users: []}) => {
  if (typeof state === 'undefined') {
    return 0;
  }

  switch (action.type) {
    case INCREMENT:
      return {...state, counter: state.counter + 1};
    case DECREMENT:
      return {...state, counter: state.counter - 1};
    case GET_POSTS: {
      console.log('GETPOSTS', action);
      return {
        ...state,
        Posts: action.users,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default counter;
