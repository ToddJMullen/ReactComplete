

import { useState } from 'react';
// import ExpenseItem from '../expenses/ExpenseItem';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

	let newExpense = {
		title: ""
		,amount: ""
		,date: null
	}

	const [newTitle, setNewTitle]	= useState('')
	,[newAmount, setNewAmount] = useState("")
	,[newDate, setNewDate] = useState("")
	,onChangeTitle = event => {
		newExpense.title = event.target.value;
		setNewTitle( newExpense.title );
		// console.log( newExpense );
	}
	,onChangeAmount = event => {
		newExpense.amount = event.target.value;
		setNewAmount( newExpense.amount );
		// console.log( newExpense );
	}
	,onChangeDate = event => {
		newExpense.date = event.target.value;
		setNewDate( newExpense.date );
		// console.log( newExpense );
	}
	;

	const onSubmit = event => {
		event.preventDefault();
		const newExp = {
			title: newTitle
			,amount: newAmount
			,date: new Date(newDate)
		}
		console.log("New expense:", newExp );
		props.onAdd( newExp );

		setNewTitle("");
		setNewAmount("");
		setNewDate("");
	}

	// const [newExp, setNewExp] = useState({
	// 	title: ""
	// 	,amount: ""
	// 	,date: null
	// })
	// ,onChangeTitle = event => {
	// 	newExpense.title = event.target.value;
	// 	// using this form is potentially a problem bc if many updates are performed it is possible that the expanded newExp item will
	// 	// not be the latest data & it could potentially overwrite/lose some changes
	// 	// setNewExp({
	// 	// 	...newExp// bad practice
	// 	// 	,title: newExpense.title
	// 	// })
	// 		// Alternate/safe way to use single state & guarantee the data is the latest
	// 		setNewExp( prevState => {
	// 			return {// we return the updated data to the callstack to be used in the next scheduled op
	// 				...prevState// previous state object that has the result of all previously scheduled updates
	// 				,title: newExpense.title
	// 			}
	// 		})
	// 	// console.log( newExpense );
	// }
	// ,onChangeAmount = event => {
	// 	newExpense.amount = event.target.value;
	// 	// setNewExp({
	// 	// 	...newExp// bad practice
	// 	// 	,amount: newExpense.amount
	// 	// })
	// 		setNewExp( prevState => {
	// 			return {// we return the updated data to the callstack to be used in the next scheduled op
	// 				...prevState// previous state object that has the result of all previously scheduled updates
	// 				,amount: newExpense.amount
	// 			}
	// 		})
	// 		// console.log( newExpense );
	// 	}
	// 	,onChangeDate = event => {
	// 		newExpense.date = event.target.value;
	// 		// setNewExp({
	// 			// 	...newExp// bad practice
	// 			// 	,date: newExpense.date
	// 			// })
	// 			setNewExp( prevState => {
	// 			return {// we return the updated data to the callstack to be used in the next scheduled op
	// 				...prevState// previous state object that has the result of all previously scheduled updates
	// 				,date: newExpense.date
	// 			}
	// 		})
	// 	// console.log( newExpense );
	// }





	return (
		<form onSubmit={onSubmit} >
			<div className="new-expense__controls">
				<div>
					<div>Title: {newTitle}</div>
					<div>Amount: {newAmount}</div>
					<div>Date: {newDate}</div>
				</div>
				<br />
				{/* <div>Title: {newExp.title}</div>
				<div>Amount: {newExp.amount}</div>
				<div>Date: {newExp.date}</div> */}
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
				<button type="submit">Add Expense</button>
			</div>
		</form>
	)

}

export default ExpenseForm;