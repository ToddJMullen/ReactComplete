import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {

	const maxValue = Math.max(...props.dataAry.map((data) => data.value));

	return (
		<div className="chart">
			{props.dataAry.map((data) => (
				<ChartBar
					key={data.label}
					label={data.label}
					value={data.value}
					max={maxValue}
				/>
			))}
		</div>
	);
};

export default Chart;
