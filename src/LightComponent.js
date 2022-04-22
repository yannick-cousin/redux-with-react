import { lighton, lightoff } from './lightReducer';
import { useDispatch, useSelector } from 'react-redux';

const LightComponent = () => {
	const light = useSelector((state) => state.light.value);
	const dispatch = useDispatch();

	return (
		<div className="lightcomponent">
			<p>{light}</p>
			<button onClick={() => dispatch(lighton())}>Light On</button>
			<button onClick={() => dispatch(lightoff())}>Light Off</button>
		</div>
	);
};

export default LightComponent;
