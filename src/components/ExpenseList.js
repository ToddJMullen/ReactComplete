import './ExpenseList.css';

import ExpenseItem from './ExpenseItem';
import Card from './Card';


function ExpenseList(props){
	const expAry = props.expenseAry;
	// console.log("expAry:", expAry );


	return (// don't know how to iterate yet
		<Card className="expense-list">
		<ExpenseItem data={expAry[0]} />
		<ExpenseItem data={expAry[1]} />
		<ExpenseItem data={expAry[2]} />
		<ExpenseItem data={expAry[3]} />
		<ExpenseItem data={expAry[4]} />
		</Card>
	)
}

export default ExpenseList;