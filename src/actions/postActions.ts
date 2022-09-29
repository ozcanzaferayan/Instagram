import axios from '../config/axios';
import {GET_POSTS} from './actions';
export const GetPosts = () => {
  return dispatch => {
    axios.get(`posts`).then(res => {
      const posts = res.data;

      dispatch({
        type: GET_POSTS,
        users: posts,
      });
    });
  };
};
