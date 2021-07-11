import './ExpenseList.css';

import { useState } from 'react';

import Card from '../ui/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';


function ExpenseList(props){
	console.log("ExpenseList/ Props:", props );

	const DEFAULT_FILTER_YEAR = (new Date()).getFullYear()
	,total = props.expenseAry.length
  ,[filterYear, setFilterYear] = useState( DEFAULT_FILTER_YEAR )

  ,onFilterYear = year => {
		setFilterYear( year );
  }
	,filteredExpAry = props.expenseAry.filter( exp => {
		// console.log("onFilterYear/", exp.date.getFullYear(), filterYear);
		return exp.date.getFullYear() === filterYear
	} )
	;
	
	return (
	<Card className="expense-list">
		<ExpensesFilter filterYear={filterYear} onFilterYear={onFilterYear} />
		<ExpensesList expenseAry={filteredExpAry} total={total} />
	</Card>
	)
}

export default ExpenseList;