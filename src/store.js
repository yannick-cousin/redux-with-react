import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';
import lightReducer from './lightReducer';

export default configureStore({
	reducer: {
		light: lightReducer,
		counter: counterReducer,
	},
});
