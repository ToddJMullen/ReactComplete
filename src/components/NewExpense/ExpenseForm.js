

import { useState } from 'react';
import ExpenseItem from '../expenses/ExpenseItem';
import './ExpenseForm.css';

const ExpenseForm = () => {

	let newExpense = {
		title: ""
		,amount: ""
		,date: null
	}

	// const [newTitle, setNewTitle]	= useState('')
	// ,[newAmount, setNewAmount] = useState("")
	// ,[newDate, setNewDate] = useState("")
	// ,onChangeTitle = event => {
	// 	newExpense.title = event.target.value;
	// 	setNewTitle( newExpense.title );
	// 	console.log( newExpense );
	// }
	// ,onChangeAmount = event => {
	// 	newExpense.amount = event.target.value;
	// 	setNewAmount( newExpense.amount );
	// 	console.log( newExpense );
	// }
	// ,onChangeDate = event => {
	// 	newExpense.date = event.target.value;
	// 	setNewDate( newExpense.date );
	// 	console.log( newExpense );
	// }
	// ;

	const [newExp, setNewExp] = useState({
		title: ""
		,amount: ""
		,date: null
	})
	,onChangeTitle = event => {
		newExpense.title = event.target.value;
		setNewExp({
			...newExp
			,title: newExpense.title
		})
		// console.log( newExpense );
	}
	,onChangeAmount = event => {
		newExpense.amount = event.target.value;
		setNewExp({
			...newExp
			,amount: newExpense.amount
		})
		// console.log( newExpense );
	}
	,onChangeDate = event => {
		newExpense.date = event.target.value;
		setNewExp({
			...newExp
			,date: newExpense.date
		})
		// console.log( newExpense );
	}


	return (
		<form>
			<div className="new-expense__controls">
				{/* <div>Title: {newTitle}</div>
				<div>Amount: {newAmount}</div>
				<div>Date: {newDate}</div> */}
				<div>Title: {newExp.title}</div>
				<div>Amount: {newExp.amount}</div>
				<div>Date: {newExp.date}</div>
				<ExpenseItem data={newExpense} />
				<div className="new-expense__control">
					<label>Title</label>
					<input onChange={onChangeTitle} type="text" />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input onChange={onChangeAmount} type="number" min="0,01" step="0,01" />
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input onChange={onChangeDate} type="date" min="2018-01-01" max="2022-12-31" />
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	)

}

export default ExpenseForm;