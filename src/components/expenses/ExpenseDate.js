import './ExpenseDate.css';

function ExpenseDate(props){
	const month = props.data && props.data.date ? props.data.date.toLocaleString("en-US",{month:'long'}) : "";
	const day = props.data && props.data.date ? props.data.date.toLocaleString("en-US",{day:'2-digit'}) : "";
	const year = props.data && props.data.date ? props.data.date.getFullYear() : "";

	return (
		<div className="expense-date">
				<div className="expense-date__month">{month}</div>
				<div className="expense-date__year">{year}</div>
				<div className="expense-date__day">{day}</div>
		</div>
	);
}

export default ExpenseDate;