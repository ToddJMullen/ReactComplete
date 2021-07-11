import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css';

const ExpensesList = props => {

	const FALLBACK = <p className="expenses-list__fallback">No Expenses Found</p>
	,count = props.expenseAry.length;

	if( count === 0 ){
		return FALLBACK;
	}

	return (
		<div>
		<p className="pCount">{count}/{props.total}</p>
		<ul className="expenses-list">
			{props.expenseAry.map( exp => <ExpenseItem key={exp.id} data={exp} /> )}
		</ul>
		</div>
	)
}

export default ExpensesList;