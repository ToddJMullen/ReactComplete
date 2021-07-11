import "./ChartBar.css";


const ChartBar = (props) => {

	let fillHeight = '0%'
	,title = `$${Number(props.value).toFixed(2)}`
	;

	if( props.max > 0 ){
		fillHeight = Math.round(100 * (props.value / props.max)) + '%';
	}

	return (
		<div title={title}>
			<div className="chart-bar">
				<div className="chart-bar__inner">
					<div className="chart-bar__fill"
								style={{height: fillHeight}}></div>
				</div>
				<div className="chart-bar__label">{props.label}</div>
			</div>
		</div>
	);
};

export default ChartBar;
