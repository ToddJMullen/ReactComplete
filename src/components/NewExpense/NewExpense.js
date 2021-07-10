import React from 'react';
import ExpenseItem from '../expenses/ExpenseItem';

import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';


const NewExpense = () => {

	let newExpense = {};

	const onAdd = newExp => {
		newExpense = newExp;
		console.log(newExpense);
	}

	return  (
	<div className="new-expense">
		<ExpenseItem data={newExpense} />
		<ExpenseForm onAdd={onAdd} />
	</div>
	)

}//NewExpense

export default NewExpense;