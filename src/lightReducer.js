import { createSlice } from '@reduxjs/toolkit';

export const lightReducer = createSlice({
	name: 'light',
	initialState: {
		value: 'off',
	},
	reducers: {
		lighton: (state) => {
			state.value = 'on';
		},
		lightoff: (state) => {
			state.value = 'off';
		},
	},
});

// Action creators are generated for each case reducer function
export const { lighton, lightoff } = lightReducer.actions;

export default lightReducer.reducer;
