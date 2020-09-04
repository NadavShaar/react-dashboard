import React, { useRef } from 'react';
import CanvasJSReact from './../../libs/canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import useResizeObserver from './../../hooks/useResizeObserver';

const Chart = props => {

	var chart = null;

	const [containerRef, entry] = useResizeObserver();

	const options = {
		animationEnabled: true,
		theme: "light2",
		...props.options
	}

	const containerProps = {
		height: "100%",
	};

	
	return (
		<div ref={containerRef} style={{width: '100%', height: '100%'}}>
			<CanvasJSChart 
				containerProps={containerProps} 
				options = {options} 
				onRef={ref => chart = ref}
			/>
		</div>
	);
}
 
export default Chart;    