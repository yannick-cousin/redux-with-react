import { createSlice } from '@reduxjs/toolkit';

export const counterReducer = createSlice({
	name: 'counter',
	initialState: {
		value: 0,
	},
	reducers: {
		increment: (state) => {
			state.value = state.value + 1;
		},
		decrement: (state) => {
			state.value = state.value - 1;
		},
		incrementbyten: (state) => {
			state.value = state.value + 10;
		},
		decrementbyten: (state) => {
			state.value = state.value - 10;
		},
		reset: (state) => {
			state.value = 0;
		},
	},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementbyten, decrementbyten, reset } =
	counterReducer.actions;

export default counterReducer.reducer;
