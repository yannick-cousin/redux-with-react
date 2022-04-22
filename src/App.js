import logo from './logo.svg';
import { lighton, lightoff } from './lightReducer';
import {
	increment,
	decrement,
	incrementbyten,
	decrementbyten,
	reset,
} from './counterReducer';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

const App = () => {
	const light = useSelector((state) => state.light.value);
	const counter = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();
	return (
		<div className="App">
			<p>{light}</p>
			<button onClick={() => dispatch(lighton())}>Light On</button>
			<button onClick={() => dispatch(lightoff())}>Light Off</button>
			<p>{counter}</p>
			<button onClick={() => dispatch(increment())}>+1</button>
			<button onClick={() => dispatch(decrement())}>-1</button>
			<p></p>
			<button onClick={() => dispatch(incrementbyten())}>+10</button>
			<button onClick={() => dispatch(decrementbyten())}>-10</button>
			<p></p>
			<button onClick={() => dispatch(reset())}>Reset</button>
		</div>
	);
};

export default App;
