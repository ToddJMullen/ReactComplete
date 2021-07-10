import './ExpenseList.css';

import Card from '../ui/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';


function ExpenseList(props){
	console.log("ExpenseList/ Props:", props );

	const DEFAULT_FILTER_YEAR = (new Date).getFullYear()
  ,expAry = props.expenseAry
  ,[filterYear, setFilterYear] = useState( DEFAULT_FILTER_YEAR )
  ,onFilterYear = year => {
    console.log("onFilterYear/", year );
    setFilterYear( year );
  }
	;


	return (// don't know how to iterate yet
	<Card className="expense-list">
		<ExpensesFilter filterYear={filterYear} onFilterYear={onFilterYear} />
		<ExpenseItem data={expAry[0]} />
		<ExpenseItem data={expAry[1]} />
		<ExpenseItem data={expAry[2]} />
		<ExpenseItem data={expAry[3]} />
		<ExpenseItem data={expAry[4]} />
		</Card>
	)
}

export default ExpenseList;