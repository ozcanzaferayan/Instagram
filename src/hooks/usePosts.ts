import {useQuery} from '@tanstack/react-query';
import axios from '../config/axios';

const getPosts = async () => {
  const {data} = await axios.get('/posts');
  return data;
};

export default function usePosts() {
  return useQuery(['posts'], getPosts);
}
