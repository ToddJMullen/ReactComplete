

import { useState } from 'react';
// import ExpenseItem from '../expenses/ExpenseItem';
import './ExpenseForm.css';

const ExpenseForm = (props) => {


	let newExpense = {
		title: ""
		,amount: ""
		,date: null
	}
	;

	const [newTitle, setNewTitle]	= useState('')
	,[newAmount, setNewAmount]		= useState("")
	,[newDate, setNewDate]				= useState("")
	,[addingItem, showForm]				= useState(false)
	,onChangeTitle = event => {
		newExpense.title = event.target.value;
		setNewTitle( newExpense.title );
		// console.log( newExpense );
	}
	,onChangeAmount = event => {
		newExpense.amount = +event.target.value;
		setNewAmount( newExpense.amount );
		// console.log( newExpense );
	}
	,onChangeDate = event => {
		newExpense.date = event.target.value;
		setNewDate( newExpense.date );
		// console.log( newExpense );
	}
	,onSubmit = event => {
		event.preventDefault();
		const newExp = {
			title: newTitle
			,amount: newAmount
			,date: new Date(newDate)
		}
		console.log("New expense:", newExp );
		props.onAdd( newExp );
		closeForm();
		setNewTitle("");
		setNewAmount("");
		setNewDate("");
	}
	,openForm = () => {
		showForm( true );
	}
	,closeForm = () => {
		showForm( false );
	}
	;

	if( !addingItem ){
		return <div><button onClick={openForm}>Add Item</button></div>
	}

	return (
		<form onSubmit={onSubmit} >
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input value={newTitle}
								 onChange={onChangeTitle} type="text" />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input value={newAmount}
								 onChange={onChangeAmount} type="number" min="0,01" step="0,01" />
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input value={newDate}
								 onChange={onChangeDate} type="date" min="2018-01-01" max="2022-12-31" />
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="reset" onClick={closeForm}>Cancel</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	)

}

export default ExpenseForm;