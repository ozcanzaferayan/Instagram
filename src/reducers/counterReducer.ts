import {createAction, createReducer} from '@reduxjs/toolkit';

type CounterState = {
  value: number;
};
const initialState: CounterState = {value: 0};

export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');
export const incrementByAmount = createAction<number>(
  'counter/incrementByAmount',
);

const counterReducer = createReducer(initialState, builder => {
  builder
    .addCase(increment, state => {
      state.value++;
    })
    .addCase(decrement, state => {
      state.value--;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload;
    });
});

export default counterReducer;
