import './ExpenseList.css';

import Card from '../ui/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';


function ExpenseList(props){
	console.log("ExpenseList/ Props:", props );

	const DEFAULT_FILTER_YEAR = (new Date()).getFullYear()
  ,[filterYear, setFilterYear] = useState( DEFAULT_FILTER_YEAR )
  ,onFilterYear = year => {
		setFilterYear( year );
  }
	,filteredExpAry = props.expenseAry.filter( exp => {
		// console.log("onFilterYear/", exp.date.getFullYear(), year);//debug string/int mismatch
		return exp.date.getFullYear() === filterYear
	} );
	
	let itemList = <p>No Matching Items</p>;
	if( filteredExpAry.length > 0 ){
		itemList = filteredExpAry.map( exp => <ExpenseItem key={exp.id} data={exp} /> )
	}


	return (
	<Card className="expense-list">
		<ExpensesFilter filterYear={filterYear} onFilterYear={onFilterYear} />
		{itemList}
	</Card>
	)
}

export default ExpenseList;