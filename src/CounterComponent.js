import {
	increment,
	decrement,
	incrementbyten,
	decrementbyten,
	reset,
} from './counterReducer';
import { useDispatch, useSelector } from 'react-redux';

const CounterComponent = () => {
	const counter = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div className="countercomponent">
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

export default CounterComponent;
