import type { Reducer } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface posts {
  username: string;
  datetime: Date;
  img_url: string;
  description: string;
  tags: string[];
}

declare const postsReducer: Reducer<{ state: posts }>;

const initialState: posts[] = [
  {
    username: 'user1',
    datetime: new Date('2019-01-16'),
    img_url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    description: 'number1',
    tags: ['new']
  },
  {
    username: 'user1',
    datetime: new Date('2019-01-16'),
    img_url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
    description: 'number2',
    tags: ['new', 'newnew']
  }
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    loadMore: (state) => {}
  }
});

export const { loadMore } = postsSlice.actions;

export default postsReducer;
