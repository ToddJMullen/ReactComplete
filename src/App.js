import { useState } from 'react';
// import ExpensesFilter from './components/expenses/ExpenseFilter';
import ExpenseList from './components/expenses/ExpenseList';
import NewExpense from './components/new-expense/NewExpense';

import './App.css';

function rand(min=0, upperBound){
  return min + Math.floor(Math.random()*upperBound)
}
function price(){
  return (Math.random() * 20).toFixed(2);
}
function date(){
  let y = [2018,2019,2020,2021,2022][rand(0,5)]
  ,m = rand(0,12)
  ,d = rand(0,30)
  // console.log("ymd:", y,m,d );
  let date = new Date(y, m, d);
  // console.log("date:", date );
  return date;
}
function title(){
  return ["Lettuce", "Tabasco","Burritos","Steak","Jalapenos"][rand(0,5)]
}
function generateExpenses(){
  let n = rand(111,340)
  ,ary = []
  ;
  for (let i = 0; i < n; i++) {
    ary.push({
      id: `e${i}`
      ,title: title()
      ,amount: price()
      ,date: date()
    });
  }// for(n)
  return ary;
}

function App() {
  

  const [expAry, setExpAry ] = useState( generateExpenses() )
  ;

  const onAddExpense = newExp => {
    console.log("New exp:", newExp );
    setExpAry( prevState => {
      newExp.id = `e${prevState.length + 1}`;
      return [newExp, ...prevState];//put new at top
    })
  }
  ;


  return (
    <div>
      <h2 className="h2Title">Expense Tracker</h2>
      <NewExpense onAddExpense={onAddExpense} />
      <ExpenseList className="expense-list" expenseAry={expAry} />
    </div>
  );
}

export default App;
